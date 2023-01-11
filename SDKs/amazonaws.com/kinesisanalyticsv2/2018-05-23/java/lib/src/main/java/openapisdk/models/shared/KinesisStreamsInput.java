package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamsInput
 *  Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
**/
public class KinesisStreamsInput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisStreamsInput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}