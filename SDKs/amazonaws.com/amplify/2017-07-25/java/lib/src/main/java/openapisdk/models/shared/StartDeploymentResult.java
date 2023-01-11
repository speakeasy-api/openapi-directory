package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StartDeploymentResult
 *  The result structure for the start a deployment request. 
**/
public class StartDeploymentResult {
    @JsonProperty("jobSummary")
    public JobSummary jobSummary;
    public StartDeploymentResult withJobSummary(JobSummary jobSummary) {
        this.jobSummary = jobSummary;
        return this;
    }
}