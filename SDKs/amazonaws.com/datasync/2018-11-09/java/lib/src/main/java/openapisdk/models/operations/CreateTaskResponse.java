package openapisdk.models.operations;



public class CreateTaskResponse {
    public String contentType;
    public CreateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTaskResponse createTaskResponse;
    public CreateTaskResponse withCreateTaskResponse(openapisdk.models.shared.CreateTaskResponse createTaskResponse) {
        this.createTaskResponse = createTaskResponse;
        return this;
    }
    public Object internalException;
    public CreateTaskResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}