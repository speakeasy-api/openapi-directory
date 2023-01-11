package openapisdk.models.operations;



public class DeleteDirectConnectGatewayAssociationProposalResponse {
    public String contentType;
    public DeleteDirectConnectGatewayAssociationProposalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDirectConnectGatewayAssociationProposalResult deleteDirectConnectGatewayAssociationProposalResult;
    public DeleteDirectConnectGatewayAssociationProposalResponse withDeleteDirectConnectGatewayAssociationProposalResult(openapisdk.models.shared.DeleteDirectConnectGatewayAssociationProposalResult deleteDirectConnectGatewayAssociationProposalResult) {
        this.deleteDirectConnectGatewayAssociationProposalResult = deleteDirectConnectGatewayAssociationProposalResult;
        return this;
    }
    public Object directConnectClientException;
    public DeleteDirectConnectGatewayAssociationProposalResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteDirectConnectGatewayAssociationProposalResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DeleteDirectConnectGatewayAssociationProposalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}