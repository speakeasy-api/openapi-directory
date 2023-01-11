package openapisdk.models.operations;



public class CancelClusterResponse {
    public java.util.Map<String, Object> cancelClusterResult;
    public CancelClusterResponse withCancelClusterResult(java.util.Map<String, Object> cancelClusterResult) {
        this.cancelClusterResult = cancelClusterResult;
        return this;
    }
    public String contentType;
    public CancelClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidJobStateException;
    public CancelClusterResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public CancelClusterResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object kmsRequestFailedException;
    public CancelClusterResponse withKmsRequestFailedException(Object kmsRequestFailedException) {
        this.kmsRequestFailedException = kmsRequestFailedException;
        return this;
    }
    public Long statusCode;
    public CancelClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}