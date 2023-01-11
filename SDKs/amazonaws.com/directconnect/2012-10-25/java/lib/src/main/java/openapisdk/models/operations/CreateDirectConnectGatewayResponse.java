package openapisdk.models.operations;



public class CreateDirectConnectGatewayResponse {
    public String contentType;
    public CreateDirectConnectGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDirectConnectGatewayResult createDirectConnectGatewayResult;
    public CreateDirectConnectGatewayResponse withCreateDirectConnectGatewayResult(openapisdk.models.shared.CreateDirectConnectGatewayResult createDirectConnectGatewayResult) {
        this.createDirectConnectGatewayResult = createDirectConnectGatewayResult;
        return this;
    }
    public Object directConnectClientException;
    public CreateDirectConnectGatewayResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public CreateDirectConnectGatewayResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public CreateDirectConnectGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}