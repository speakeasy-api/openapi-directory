package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamsOutputUpdate
 * When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination.
**/
public class KinesisStreamsOutputUpdate {
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public KinesisStreamsOutputUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
}