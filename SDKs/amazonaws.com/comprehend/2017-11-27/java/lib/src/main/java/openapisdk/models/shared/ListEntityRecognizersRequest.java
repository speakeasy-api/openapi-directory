package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEntityRecognizersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public EntityRecognizerFilter filter;
    public ListEntityRecognizersRequest withFilter(EntityRecognizerFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListEntityRecognizersRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEntityRecognizersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}