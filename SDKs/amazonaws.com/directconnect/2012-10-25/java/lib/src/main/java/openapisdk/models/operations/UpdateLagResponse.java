package openapisdk.models.operations;



public class UpdateLagResponse {
    public String contentType;
    public UpdateLagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public UpdateLagResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public UpdateLagResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.Lag lag;
    public UpdateLagResponse withLag(openapisdk.models.shared.Lag lag) {
        this.lag = lag;
        return this;
    }
    public Long statusCode;
    public UpdateLagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}