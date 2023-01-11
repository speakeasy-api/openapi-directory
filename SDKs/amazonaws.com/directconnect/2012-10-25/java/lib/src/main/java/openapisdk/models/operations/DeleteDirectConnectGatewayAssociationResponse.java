package openapisdk.models.operations;



public class DeleteDirectConnectGatewayAssociationResponse {
    public String contentType;
    public DeleteDirectConnectGatewayAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDirectConnectGatewayAssociationResult deleteDirectConnectGatewayAssociationResult;
    public DeleteDirectConnectGatewayAssociationResponse withDeleteDirectConnectGatewayAssociationResult(openapisdk.models.shared.DeleteDirectConnectGatewayAssociationResult deleteDirectConnectGatewayAssociationResult) {
        this.deleteDirectConnectGatewayAssociationResult = deleteDirectConnectGatewayAssociationResult;
        return this;
    }
    public Object directConnectClientException;
    public DeleteDirectConnectGatewayAssociationResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteDirectConnectGatewayAssociationResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DeleteDirectConnectGatewayAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}