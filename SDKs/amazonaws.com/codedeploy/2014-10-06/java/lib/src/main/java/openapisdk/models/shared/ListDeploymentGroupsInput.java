package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeploymentGroupsInput
 * Represents the input of a <code>ListDeploymentGroups</code> operation.
**/
public class ListDeploymentGroupsInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public ListDeploymentGroupsInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentGroupsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}