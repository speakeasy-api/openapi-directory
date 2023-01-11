package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisFirehoseOutputUpdate
 * For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.
**/
public class KinesisFirehoseOutputUpdate {
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public KinesisFirehoseOutputUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
}