package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRecordsResponse
 * Returned for a successful UpdateRecordsRequest.
**/
public class UpdateRecordsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Records")
    public Record[] records;
    public UpdateRecordsResponse withRecords(Record[] records) {
        this.records = records;
        return this;
    }
}