package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTestGridProjectsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResult")
    public Long maxResult;
    public ListTestGridProjectsRequest withMaxResult(Long maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestGridProjectsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}