package openapisdk.models.operations;



public class UpdateTaskResponse {
    public String contentType;
    public UpdateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateTaskResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateTaskResponse;
    public UpdateTaskResponse withUpdateTaskResponse(java.util.Map<String, Object> updateTaskResponse) {
        this.updateTaskResponse = updateTaskResponse;
        return this;
    }
}