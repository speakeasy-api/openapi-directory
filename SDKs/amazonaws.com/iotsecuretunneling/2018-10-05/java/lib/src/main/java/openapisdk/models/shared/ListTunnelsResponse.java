package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTunnelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTunnelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunnelSummaries")
    public TunnelSummary[] tunnelSummaries;
    public ListTunnelsResponse withTunnelSummaries(TunnelSummary[] tunnelSummaries) {
        this.tunnelSummaries = tunnelSummaries;
        return this;
    }
}