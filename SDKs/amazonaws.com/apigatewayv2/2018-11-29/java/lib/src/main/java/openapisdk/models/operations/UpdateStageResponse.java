package openapisdk.models.operations;



public class UpdateStageResponse {
    public Object badRequestException;
    public UpdateStageResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateStageResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateStageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateStageResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateStageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateStageResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateStageResponse updateStageResponse;
    public UpdateStageResponse withUpdateStageResponse(openapisdk.models.shared.UpdateStageResponse updateStageResponse) {
        this.updateStageResponse = updateStageResponse;
        return this;
    }
}