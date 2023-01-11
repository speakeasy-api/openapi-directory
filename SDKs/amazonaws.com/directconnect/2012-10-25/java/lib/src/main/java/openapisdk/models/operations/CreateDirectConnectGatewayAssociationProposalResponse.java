package openapisdk.models.operations;



public class CreateDirectConnectGatewayAssociationProposalResponse {
    public String contentType;
    public CreateDirectConnectGatewayAssociationProposalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDirectConnectGatewayAssociationProposalResult createDirectConnectGatewayAssociationProposalResult;
    public CreateDirectConnectGatewayAssociationProposalResponse withCreateDirectConnectGatewayAssociationProposalResult(openapisdk.models.shared.CreateDirectConnectGatewayAssociationProposalResult createDirectConnectGatewayAssociationProposalResult) {
        this.createDirectConnectGatewayAssociationProposalResult = createDirectConnectGatewayAssociationProposalResult;
        return this;
    }
    public Object directConnectClientException;
    public CreateDirectConnectGatewayAssociationProposalResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public CreateDirectConnectGatewayAssociationProposalResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public CreateDirectConnectGatewayAssociationProposalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}