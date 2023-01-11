package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaOutputUpdate
 * When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination.
**/
public class LambdaOutputUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public LambdaOutputUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARNUpdate")
    public String roleARNUpdate;
    public LambdaOutputUpdate withRoleArnUpdate(String roleARNUpdate) {
        this.roleARNUpdate = roleARNUpdate;
        return this;
    }
}