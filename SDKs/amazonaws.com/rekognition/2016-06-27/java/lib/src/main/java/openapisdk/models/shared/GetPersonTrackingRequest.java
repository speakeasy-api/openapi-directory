package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPersonTrackingRequest {
    @JsonProperty("JobId")
    public String jobId;
    public GetPersonTrackingRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetPersonTrackingRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetPersonTrackingRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortBy")
    public PersonTrackingSortByEnum sortBy;
    public GetPersonTrackingRequest withSortBy(PersonTrackingSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}