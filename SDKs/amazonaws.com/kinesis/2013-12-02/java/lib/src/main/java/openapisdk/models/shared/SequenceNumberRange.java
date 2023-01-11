package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SequenceNumberRange
 * The range of possible sequence numbers for the shard.
**/
public class SequenceNumberRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndingSequenceNumber")
    public String endingSequenceNumber;
    public SequenceNumberRange withEndingSequenceNumber(String endingSequenceNumber) {
        this.endingSequenceNumber = endingSequenceNumber;
        return this;
    }
    @JsonProperty("StartingSequenceNumber")
    public String startingSequenceNumber;
    public SequenceNumberRange withStartingSequenceNumber(String startingSequenceNumber) {
        this.startingSequenceNumber = startingSequenceNumber;
        return this;
    }
}