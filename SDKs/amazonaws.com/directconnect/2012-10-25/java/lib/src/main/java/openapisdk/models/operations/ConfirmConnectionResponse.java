package openapisdk.models.operations;



public class ConfirmConnectionResponse {
    public openapisdk.models.shared.ConfirmConnectionResponse confirmConnectionResponse;
    public ConfirmConnectionResponse withConfirmConnectionResponse(openapisdk.models.shared.ConfirmConnectionResponse confirmConnectionResponse) {
        this.confirmConnectionResponse = confirmConnectionResponse;
        return this;
    }
    public String contentType;
    public ConfirmConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public ConfirmConnectionResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public ConfirmConnectionResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public ConfirmConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}