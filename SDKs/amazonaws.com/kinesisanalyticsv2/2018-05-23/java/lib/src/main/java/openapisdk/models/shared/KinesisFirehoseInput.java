package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisFirehoseInput
 * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
**/
public class KinesisFirehoseInput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisFirehoseInput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}