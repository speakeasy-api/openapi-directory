package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisFirehoseOutput
 * For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream. 
**/
public class KinesisFirehoseOutput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisFirehoseOutput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}