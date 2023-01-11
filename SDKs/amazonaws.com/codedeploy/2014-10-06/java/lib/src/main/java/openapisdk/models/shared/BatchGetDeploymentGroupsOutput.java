package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetDeploymentGroupsOutput
 * Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
**/
public class BatchGetDeploymentGroupsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentGroupsInfo")
    public DeploymentGroupInfo[] deploymentGroupsInfo;
    public BatchGetDeploymentGroupsOutput withDeploymentGroupsInfo(DeploymentGroupInfo[] deploymentGroupsInfo) {
        this.deploymentGroupsInfo = deploymentGroupsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchGetDeploymentGroupsOutput withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}