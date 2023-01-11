package openapisdk.models.operations;



public class CreateModelResponse {
    public Object badRequestException;
    public CreateModelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateModelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateModelResponse createModelResponse;
    public CreateModelResponse withCreateModelResponse(openapisdk.models.shared.CreateModelResponse createModelResponse) {
        this.createModelResponse = createModelResponse;
        return this;
    }
    public Object notFoundException;
    public CreateModelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateModelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}