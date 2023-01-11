package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConnectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorList")
    public Connector[] connectorList;
    public GetConnectorsResponse withConnectorList(Connector[] connectorList) {
        this.connectorList = connectorList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetConnectorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}