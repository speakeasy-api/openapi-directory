package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectors")
    public ConnectorSummary[] connectors;
    public ListConnectorsResponse withConnectors(ConnectorSummary[] connectors) {
        this.connectors = connectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListConnectorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}