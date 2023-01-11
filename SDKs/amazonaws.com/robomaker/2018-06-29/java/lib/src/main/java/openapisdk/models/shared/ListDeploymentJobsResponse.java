package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeploymentJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentJobs")
    public DeploymentJob[] deploymentJobs;
    public ListDeploymentJobsResponse withDeploymentJobs(DeploymentJob[] deploymentJobs) {
        this.deploymentJobs = deploymentJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}