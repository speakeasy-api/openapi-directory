package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisFirehoseOutput
 * When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.
**/
public class KinesisFirehoseOutput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisFirehoseOutput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisFirehoseOutput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}