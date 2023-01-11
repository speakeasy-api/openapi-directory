package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListComponentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersionList")
    public ComponentVersion[] componentVersionList;
    public ListComponentsResponse withComponentVersionList(ComponentVersion[] componentVersionList) {
        this.componentVersionList = componentVersionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListComponentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListComponentsResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}