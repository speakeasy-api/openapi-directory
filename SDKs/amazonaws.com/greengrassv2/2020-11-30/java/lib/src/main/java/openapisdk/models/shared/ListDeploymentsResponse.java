package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeploymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public Deployment[] deployments;
    public ListDeploymentsResponse withDeployments(Deployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}