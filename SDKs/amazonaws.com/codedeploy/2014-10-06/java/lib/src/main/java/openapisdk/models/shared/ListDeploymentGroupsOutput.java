package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeploymentGroupsOutput
 * Represents the output of a <code>ListDeploymentGroups</code> operation.
**/
public class ListDeploymentGroupsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationName")
    public String applicationName;
    public ListDeploymentGroupsOutput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentGroups")
    public String[] deploymentGroups;
    public ListDeploymentGroupsOutput withDeploymentGroups(String[] deploymentGroups) {
        this.deploymentGroups = deploymentGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentGroupsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}