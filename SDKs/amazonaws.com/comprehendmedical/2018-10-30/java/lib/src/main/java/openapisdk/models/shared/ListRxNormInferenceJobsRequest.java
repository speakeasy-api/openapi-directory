package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRxNormInferenceJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public ComprehendMedicalAsyncJobFilter filter;
    public ListRxNormInferenceJobsRequest withFilter(ComprehendMedicalAsyncJobFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListRxNormInferenceJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRxNormInferenceJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}