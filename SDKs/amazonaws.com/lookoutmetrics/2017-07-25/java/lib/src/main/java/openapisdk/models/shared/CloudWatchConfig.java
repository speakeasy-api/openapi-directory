package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloudWatchConfig
 * Details about an Amazon CloudWatch datasource.
**/
public class CloudWatchConfig {
    @JsonProperty("RoleArn")
    public String roleArn;
    public CloudWatchConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}