package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamsOutput
 * When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
**/
public class KinesisStreamsOutput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisStreamsOutput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisStreamsOutput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}