package openapisdk.models.operations;



public class StartTaskExecutionResponse {
    public String contentType;
    public StartTaskExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public StartTaskExecutionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public StartTaskExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.StartTaskExecutionResponse startTaskExecutionResponse;
    public StartTaskExecutionResponse withStartTaskExecutionResponse(openapisdk.models.shared.StartTaskExecutionResponse startTaskExecutionResponse) {
        this.startTaskExecutionResponse = startTaskExecutionResponse;
        return this;
    }
    public Long statusCode;
    public StartTaskExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}