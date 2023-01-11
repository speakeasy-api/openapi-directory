package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetIdentityPoolConfigurationRequestBodyPushSync
 * Configuration options to be applied to the identity pool.
**/
public class SetIdentityPoolConfigurationRequestBodyPushSync {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationArns")
    public String[] applicationArns;
    public SetIdentityPoolConfigurationRequestBodyPushSync withApplicationArns(String[] applicationArns) {
        this.applicationArns = applicationArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public SetIdentityPoolConfigurationRequestBodyPushSync withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}