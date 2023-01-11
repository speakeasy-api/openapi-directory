package openapisdk.models.operations;



public class DeleteDirectConnectGatewayResponse {
    public String contentType;
    public DeleteDirectConnectGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDirectConnectGatewayResult deleteDirectConnectGatewayResult;
    public DeleteDirectConnectGatewayResponse withDeleteDirectConnectGatewayResult(openapisdk.models.shared.DeleteDirectConnectGatewayResult deleteDirectConnectGatewayResult) {
        this.deleteDirectConnectGatewayResult = deleteDirectConnectGatewayResult;
        return this;
    }
    public Object directConnectClientException;
    public DeleteDirectConnectGatewayResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteDirectConnectGatewayResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DeleteDirectConnectGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}