package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDeploymentsResult
 * Contains the response to a <code>DescribeDeployments</code> request.
**/
public class DescribeDeploymentsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deployments")
    public Deployment[] deployments;
    public DescribeDeploymentsResult withDeployments(Deployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
}