package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamsInputUpdate
 * When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source.
**/
public class KinesisStreamsInputUpdate {
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public KinesisStreamsInputUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
}