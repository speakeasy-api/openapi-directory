package openapisdk.models.operations;



public class CancelJobResponse {
    public java.util.Map<String, Object> cancelJobResult;
    public CancelJobResponse withCancelJobResult(java.util.Map<String, Object> cancelJobResult) {
        this.cancelJobResult = cancelJobResult;
        return this;
    }
    public String contentType;
    public CancelJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidJobStateException;
    public CancelJobResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public CancelJobResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object kmsRequestFailedException;
    public CancelJobResponse withKmsRequestFailedException(Object kmsRequestFailedException) {
        this.kmsRequestFailedException = kmsRequestFailedException;
        return this;
    }
    public Long statusCode;
    public CancelJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}