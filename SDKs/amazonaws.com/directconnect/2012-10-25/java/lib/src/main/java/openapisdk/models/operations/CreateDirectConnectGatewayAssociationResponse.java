package openapisdk.models.operations;



public class CreateDirectConnectGatewayAssociationResponse {
    public String contentType;
    public CreateDirectConnectGatewayAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDirectConnectGatewayAssociationResult createDirectConnectGatewayAssociationResult;
    public CreateDirectConnectGatewayAssociationResponse withCreateDirectConnectGatewayAssociationResult(openapisdk.models.shared.CreateDirectConnectGatewayAssociationResult createDirectConnectGatewayAssociationResult) {
        this.createDirectConnectGatewayAssociationResult = createDirectConnectGatewayAssociationResult;
        return this;
    }
    public Object directConnectClientException;
    public CreateDirectConnectGatewayAssociationResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public CreateDirectConnectGatewayAssociationResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public CreateDirectConnectGatewayAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}