package openapisdk.models.operations;



public class CreateStageResponse {
    public Object badRequestException;
    public CreateStageResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateStageResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateStageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStageResponse createStageResponse;
    public CreateStageResponse withCreateStageResponse(openapisdk.models.shared.CreateStageResponse createStageResponse) {
        this.createStageResponse = createStageResponse;
        return this;
    }
    public Object notFoundException;
    public CreateStageResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateStageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateStageResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}