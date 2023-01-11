package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBulkDeploymentDetailedReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deployments")
    public BulkDeploymentResult[] deployments;
    public ListBulkDeploymentDetailedReportsResponse withDeployments(BulkDeploymentResult[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListBulkDeploymentDetailedReportsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}