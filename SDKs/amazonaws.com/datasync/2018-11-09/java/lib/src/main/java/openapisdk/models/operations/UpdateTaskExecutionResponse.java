package openapisdk.models.operations;



public class UpdateTaskExecutionResponse {
    public String contentType;
    public UpdateTaskExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateTaskExecutionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateTaskExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateTaskExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateTaskExecutionResponse;
    public UpdateTaskExecutionResponse withUpdateTaskExecutionResponse(java.util.Map<String, Object> updateTaskExecutionResponse) {
        this.updateTaskExecutionResponse = updateTaskExecutionResponse;
        return this;
    }
}