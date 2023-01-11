package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorConfigurations")
    public java.util.Map<String, ConnectorConfiguration> connectorConfigurations;
    public DescribeConnectorsResponse withConnectorConfigurations(java.util.Map<String, ConnectorConfiguration> connectorConfigurations) {
        this.connectorConfigurations = connectorConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeConnectorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}