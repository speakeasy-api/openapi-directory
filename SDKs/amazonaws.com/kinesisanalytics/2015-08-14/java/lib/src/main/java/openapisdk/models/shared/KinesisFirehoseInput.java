package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisFirehoseInput
 *  Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
**/
public class KinesisFirehoseInput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisFirehoseInput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisFirehoseInput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}