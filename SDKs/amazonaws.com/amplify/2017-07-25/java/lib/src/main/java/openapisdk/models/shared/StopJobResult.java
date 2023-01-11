package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopJobResult
 *  The result structure for the stop job request. 
**/
public class StopJobResult {
    @JsonProperty("jobSummary")
    public JobSummary jobSummary;
    public StopJobResult withJobSummary(JobSummary jobSummary) {
        this.jobSummary = jobSummary;
        return this;
    }
}