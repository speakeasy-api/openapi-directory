package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTestGridSessionActionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResult")
    public Long maxResult;
    public ListTestGridSessionActionsRequest withMaxResult(Long maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestGridSessionActionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("sessionArn")
    public String sessionArn;
    public ListTestGridSessionActionsRequest withSessionArn(String sessionArn) {
        this.sessionArn = sessionArn;
        return this;
    }
}