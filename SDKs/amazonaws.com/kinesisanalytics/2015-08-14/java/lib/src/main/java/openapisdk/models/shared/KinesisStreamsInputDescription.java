package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisStreamsInputDescription
 *  Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration. 
**/
public class KinesisStreamsInputDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisStreamsInputDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisStreamsInputDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}