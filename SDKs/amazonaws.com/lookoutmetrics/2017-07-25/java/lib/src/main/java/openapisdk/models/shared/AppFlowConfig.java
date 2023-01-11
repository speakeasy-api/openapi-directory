package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AppFlowConfig
 * Details about an Amazon AppFlow flow datasource.
**/
public class AppFlowConfig {
    @JsonProperty("FlowName")
    public String flowName;
    public AppFlowConfig withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public AppFlowConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}