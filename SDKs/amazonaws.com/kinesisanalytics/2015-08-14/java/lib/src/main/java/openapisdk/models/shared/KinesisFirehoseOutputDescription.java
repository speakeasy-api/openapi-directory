package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisFirehoseOutputDescription
 *  For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination. 
**/
public class KinesisFirehoseOutputDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisFirehoseOutputDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisFirehoseOutputDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}