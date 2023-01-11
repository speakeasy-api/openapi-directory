package openapisdk.models.operations;



public class DeleteTaskResponse {
    public String contentType;
    public DeleteTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTaskResponse;
    public DeleteTaskResponse withDeleteTaskResponse(java.util.Map<String, Object> deleteTaskResponse) {
        this.deleteTaskResponse = deleteTaskResponse;
        return this;
    }
    public Object internalException;
    public DeleteTaskResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}