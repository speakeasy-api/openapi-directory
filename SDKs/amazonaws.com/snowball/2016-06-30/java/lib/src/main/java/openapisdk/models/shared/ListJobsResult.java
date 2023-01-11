package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListJobsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobListEntries")
    public JobListEntry[] jobListEntries;
    public ListJobsResult withJobListEntries(JobListEntry[] jobListEntries) {
        this.jobListEntries = jobListEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListJobsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}