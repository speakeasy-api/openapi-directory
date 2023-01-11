package openapisdk.models.operations;



public class AcceptDirectConnectGatewayAssociationProposalResponse {
    public openapisdk.models.shared.AcceptDirectConnectGatewayAssociationProposalResult acceptDirectConnectGatewayAssociationProposalResult;
    public AcceptDirectConnectGatewayAssociationProposalResponse withAcceptDirectConnectGatewayAssociationProposalResult(openapisdk.models.shared.AcceptDirectConnectGatewayAssociationProposalResult acceptDirectConnectGatewayAssociationProposalResult) {
        this.acceptDirectConnectGatewayAssociationProposalResult = acceptDirectConnectGatewayAssociationProposalResult;
        return this;
    }
    public String contentType;
    public AcceptDirectConnectGatewayAssociationProposalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AcceptDirectConnectGatewayAssociationProposalResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AcceptDirectConnectGatewayAssociationProposalResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public AcceptDirectConnectGatewayAssociationProposalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}