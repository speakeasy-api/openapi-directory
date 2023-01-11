package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReviewableHiTsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITs")
    public Hit[] hiTs;
    public ListReviewableHiTsResponse withHiTs(Hit[] hiTs) {
        this.hiTs = hiTs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListReviewableHiTsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumResults")
    public Long numResults;
    public ListReviewableHiTsResponse withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
}