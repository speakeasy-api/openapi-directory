package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFlowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flows")
    public FlowDefinition[] flows;
    public ListFlowsResponse withFlows(FlowDefinition[] flows) {
        this.flows = flows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFlowsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}