package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamsInput
 *  Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
**/
public class KinesisStreamsInput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisStreamsInput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisStreamsInput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}