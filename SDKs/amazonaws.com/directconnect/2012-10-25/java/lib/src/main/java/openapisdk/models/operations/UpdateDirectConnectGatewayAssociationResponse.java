package openapisdk.models.operations;



public class UpdateDirectConnectGatewayAssociationResponse {
    public String contentType;
    public UpdateDirectConnectGatewayAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public UpdateDirectConnectGatewayAssociationResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public UpdateDirectConnectGatewayAssociationResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public UpdateDirectConnectGatewayAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateDirectConnectGatewayAssociationResult updateDirectConnectGatewayAssociationResult;
    public UpdateDirectConnectGatewayAssociationResponse withUpdateDirectConnectGatewayAssociationResult(openapisdk.models.shared.UpdateDirectConnectGatewayAssociationResult updateDirectConnectGatewayAssociationResult) {
        this.updateDirectConnectGatewayAssociationResult = updateDirectConnectGatewayAssociationResult;
        return this;
    }
}