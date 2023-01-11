package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventsDetectionJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public EventsDetectionJobFilter filter;
    public ListEventsDetectionJobsRequest withFilter(EventsDetectionJobFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListEventsDetectionJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventsDetectionJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}