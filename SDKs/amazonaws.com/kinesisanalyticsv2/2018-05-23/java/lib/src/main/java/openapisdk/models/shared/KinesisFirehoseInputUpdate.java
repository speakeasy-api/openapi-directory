package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisFirehoseInputUpdate
 * For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.
**/
public class KinesisFirehoseInputUpdate {
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public KinesisFirehoseInputUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
}