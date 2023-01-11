package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisFirehoseInputDescription
 *  Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. 
**/
public class KinesisFirehoseInputDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisFirehoseInputDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisFirehoseInputDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}