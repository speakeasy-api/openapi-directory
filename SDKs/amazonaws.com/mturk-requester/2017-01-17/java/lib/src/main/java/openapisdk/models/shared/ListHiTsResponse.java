package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHiTsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITs")
    public Hit[] hiTs;
    public ListHiTsResponse withHiTs(Hit[] hiTs) {
        this.hiTs = hiTs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListHiTsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumResults")
    public Long numResults;
    public ListHiTsResponse withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
}