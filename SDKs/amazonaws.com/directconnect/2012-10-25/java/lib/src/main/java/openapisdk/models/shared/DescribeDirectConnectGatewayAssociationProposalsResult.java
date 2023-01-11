package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectConnectGatewayAssociationProposalsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAssociationProposals")
    public DirectConnectGatewayAssociationProposal[] directConnectGatewayAssociationProposals;
    public DescribeDirectConnectGatewayAssociationProposalsResult withDirectConnectGatewayAssociationProposals(DirectConnectGatewayAssociationProposal[] directConnectGatewayAssociationProposals) {
        this.directConnectGatewayAssociationProposals = directConnectGatewayAssociationProposals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDirectConnectGatewayAssociationProposalsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}