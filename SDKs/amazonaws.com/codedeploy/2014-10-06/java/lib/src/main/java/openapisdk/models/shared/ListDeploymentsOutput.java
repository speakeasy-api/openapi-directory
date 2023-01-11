package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeploymentsOutput
 * Represents the output of a <code>ListDeployments</code> operation.
**/
public class ListDeploymentsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public String[] deployments;
    public ListDeploymentsOutput withDeployments(String[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}