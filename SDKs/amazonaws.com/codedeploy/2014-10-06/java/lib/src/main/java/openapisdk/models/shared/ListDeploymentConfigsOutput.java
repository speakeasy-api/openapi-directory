package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeploymentConfigsOutput
 * Represents the output of a <code>ListDeploymentConfigs</code> operation.
**/
public class ListDeploymentConfigsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfigsList")
    public String[] deploymentConfigsList;
    public ListDeploymentConfigsOutput withDeploymentConfigsList(String[] deploymentConfigsList) {
        this.deploymentConfigsList = deploymentConfigsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentConfigsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}