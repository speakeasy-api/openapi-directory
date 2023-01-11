package openapisdk.models.operations;



public class CancelTaskExecutionResponse {
    public java.util.Map<String, Object> cancelTaskExecutionResponse;
    public CancelTaskExecutionResponse withCancelTaskExecutionResponse(java.util.Map<String, Object> cancelTaskExecutionResponse) {
        this.cancelTaskExecutionResponse = cancelTaskExecutionResponse;
        return this;
    }
    public String contentType;
    public CancelTaskExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public CancelTaskExecutionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CancelTaskExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CancelTaskExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}