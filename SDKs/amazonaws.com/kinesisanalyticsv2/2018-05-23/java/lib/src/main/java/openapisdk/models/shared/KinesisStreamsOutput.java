package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamsOutput
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). 
**/
public class KinesisStreamsOutput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisStreamsOutput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}