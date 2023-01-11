package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBulkDeploymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BulkDeployments")
    public BulkDeployment[] bulkDeployments;
    public ListBulkDeploymentsResponse withBulkDeployments(BulkDeployment[] bulkDeployments) {
        this.bulkDeployments = bulkDeployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListBulkDeploymentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}