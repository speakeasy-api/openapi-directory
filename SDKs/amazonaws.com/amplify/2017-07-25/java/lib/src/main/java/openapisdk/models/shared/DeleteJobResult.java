package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteJobResult
 *  The result structure for the delete job request. 
**/
public class DeleteJobResult {
    @JsonProperty("jobSummary")
    public JobSummary jobSummary;
    public DeleteJobResult withJobSummary(JobSummary jobSummary) {
        this.jobSummary = jobSummary;
        return this;
    }
}