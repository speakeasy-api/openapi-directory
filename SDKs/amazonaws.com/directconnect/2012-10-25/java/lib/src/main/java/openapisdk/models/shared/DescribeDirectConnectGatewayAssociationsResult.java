package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectConnectGatewayAssociationsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAssociations")
    public DirectConnectGatewayAssociation[] directConnectGatewayAssociations;
    public DescribeDirectConnectGatewayAssociationsResult withDirectConnectGatewayAssociations(DirectConnectGatewayAssociation[] directConnectGatewayAssociations) {
        this.directConnectGatewayAssociations = directConnectGatewayAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDirectConnectGatewayAssociationsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}