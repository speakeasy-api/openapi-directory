package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectConnectGatewayAssociationProposalsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedGatewayId")
    public String associatedGatewayId;
    public DescribeDirectConnectGatewayAssociationProposalsRequest withAssociatedGatewayId(String associatedGatewayId) {
        this.associatedGatewayId = associatedGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public DescribeDirectConnectGatewayAssociationProposalsRequest withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeDirectConnectGatewayAssociationProposalsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDirectConnectGatewayAssociationProposalsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalId")
    public String proposalId;
    public DescribeDirectConnectGatewayAssociationProposalsRequest withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}