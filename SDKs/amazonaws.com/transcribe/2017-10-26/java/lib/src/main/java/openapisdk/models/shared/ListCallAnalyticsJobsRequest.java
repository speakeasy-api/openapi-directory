package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallAnalyticsJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobNameContains")
    public String jobNameContains;
    public ListCallAnalyticsJobsRequest withJobNameContains(String jobNameContains) {
        this.jobNameContains = jobNameContains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListCallAnalyticsJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCallAnalyticsJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public CallAnalyticsJobStatusEnum status;
    public ListCallAnalyticsJobsRequest withStatus(CallAnalyticsJobStatusEnum status) {
        this.status = status;
        return this;
    }
}