package openapisdk.models.operations;



public class DeleteLagResponse {
    public String contentType;
    public DeleteLagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DeleteLagResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteLagResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.Lag lag;
    public DeleteLagResponse withLag(openapisdk.models.shared.Lag lag) {
        this.lag = lag;
        return this;
    }
    public Long statusCode;
    public DeleteLagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}