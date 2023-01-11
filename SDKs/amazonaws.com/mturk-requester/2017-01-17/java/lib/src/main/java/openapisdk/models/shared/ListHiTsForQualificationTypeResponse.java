package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHiTsForQualificationTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITs")
    public Hit[] hiTs;
    public ListHiTsForQualificationTypeResponse withHiTs(Hit[] hiTs) {
        this.hiTs = hiTs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListHiTsForQualificationTypeResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumResults")
    public Long numResults;
    public ListHiTsForQualificationTypeResponse withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
}