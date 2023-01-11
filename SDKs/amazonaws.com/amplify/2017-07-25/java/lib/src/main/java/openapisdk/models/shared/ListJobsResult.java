package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobsResult
 *  The maximum number of records to list in a single response. 
**/
public class ListJobsResult {
    @JsonProperty("jobSummaries")
    public JobSummary[] jobSummaries;
    public ListJobsResult withJobSummaries(JobSummary[] jobSummaries) {
        this.jobSummaries = jobSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListJobsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}