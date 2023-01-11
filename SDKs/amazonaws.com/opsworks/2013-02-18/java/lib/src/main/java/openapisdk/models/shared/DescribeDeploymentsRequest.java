package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDeploymentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public String appId;
    public DescribeDeploymentsRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentIds")
    public String[] deploymentIds;
    public DescribeDeploymentsRequest withDeploymentIds(String[] deploymentIds) {
        this.deploymentIds = deploymentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeDeploymentsRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}