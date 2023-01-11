package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClusterJobsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobListEntries")
    public JobListEntry[] jobListEntries;
    public ListClusterJobsResult withJobListEntries(JobListEntry[] jobListEntries) {
        this.jobListEntries = jobListEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListClusterJobsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}