package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceDescription
 * Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
**/
public class SourceDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamSourceDescription")
    public KinesisStreamSourceDescription kinesisStreamSourceDescription;
    public SourceDescription withKinesisStreamSourceDescription(KinesisStreamSourceDescription kinesisStreamSourceDescription) {
        this.kinesisStreamSourceDescription = kinesisStreamSourceDescription;
        return this;
    }
}