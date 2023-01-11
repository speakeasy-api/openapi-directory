package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMailboxExportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jobs")
    public MailboxExportJob[] jobs;
    public ListMailboxExportJobsResponse withJobs(MailboxExportJob[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMailboxExportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}