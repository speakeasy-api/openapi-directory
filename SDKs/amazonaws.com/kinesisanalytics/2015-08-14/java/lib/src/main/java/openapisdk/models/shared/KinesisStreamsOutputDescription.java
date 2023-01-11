package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisStreamsOutputDescription
 *  For an application output, describes the Amazon Kinesis stream configured as its destination. 
**/
public class KinesisStreamsOutputDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisStreamsOutputDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisStreamsOutputDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}