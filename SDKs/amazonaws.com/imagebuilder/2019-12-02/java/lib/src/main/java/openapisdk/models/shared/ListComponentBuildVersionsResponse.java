package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListComponentBuildVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentSummaryList")
    public ComponentSummary[] componentSummaryList;
    public ListComponentBuildVersionsResponse withComponentSummaryList(ComponentSummary[] componentSummaryList) {
        this.componentSummaryList = componentSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListComponentBuildVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListComponentBuildVersionsResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}