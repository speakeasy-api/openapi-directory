package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetDeploymentGroupsInput
 * Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
**/
public class BatchGetDeploymentGroupsInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public BatchGetDeploymentGroupsInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("deploymentGroupNames")
    public String[] deploymentGroupNames;
    public BatchGetDeploymentGroupsInput withDeploymentGroupNames(String[] deploymentGroupNames) {
        this.deploymentGroupNames = deploymentGroupNames;
        return this;
    }
}