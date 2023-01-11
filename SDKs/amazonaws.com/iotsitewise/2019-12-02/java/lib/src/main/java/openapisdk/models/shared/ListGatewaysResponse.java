package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGatewaysResponse {
    @JsonProperty("gatewaySummaries")
    public GatewaySummary[] gatewaySummaries;
    public ListGatewaysResponse withGatewaySummaries(GatewaySummary[] gatewaySummaries) {
        this.gatewaySummaries = gatewaySummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListGatewaysResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}