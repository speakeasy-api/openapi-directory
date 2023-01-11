package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCommandsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommandIds")
    public String[] commandIds;
    public DescribeCommandsRequest withCommandIds(String[] commandIds) {
        this.commandIds = commandIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public String deploymentId;
    public DescribeCommandsRequest withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public DescribeCommandsRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}