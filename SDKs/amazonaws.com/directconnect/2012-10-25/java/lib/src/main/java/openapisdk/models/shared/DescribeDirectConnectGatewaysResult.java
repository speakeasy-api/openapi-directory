package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectConnectGatewaysResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGateways")
    public DirectConnectGateway[] directConnectGateways;
    public DescribeDirectConnectGatewaysResult withDirectConnectGateways(DirectConnectGateway[] directConnectGateways) {
        this.directConnectGateways = directConnectGateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDirectConnectGatewaysResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}