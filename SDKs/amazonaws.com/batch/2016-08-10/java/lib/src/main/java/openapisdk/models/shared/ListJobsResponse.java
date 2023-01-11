package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListJobsResponse {
    @JsonProperty("jobSummaryList")
    public JobSummary[] jobSummaryList;
    public ListJobsResponse withJobSummaryList(JobSummary[] jobSummaryList) {
        this.jobSummaryList = jobSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}