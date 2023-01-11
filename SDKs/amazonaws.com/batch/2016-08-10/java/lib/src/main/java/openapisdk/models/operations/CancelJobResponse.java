package openapisdk.models.operations;



public class CancelJobResponse {
    public java.util.Map<String, Object> cancelJobResponse;
    public CancelJobResponse withCancelJobResponse(java.util.Map<String, Object> cancelJobResponse) {
        this.cancelJobResponse = cancelJobResponse;
        return this;
    }
    public Object clientException;
    public CancelJobResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CancelJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serverException;
    public CancelJobResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CancelJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}