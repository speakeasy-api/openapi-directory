package openapisdk.models.operations;



public class UpdateApiMappingResponse {
    public Object badRequestException;
    public UpdateApiMappingResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateApiMappingResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateApiMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateApiMappingResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateApiMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateApiMappingResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateApiMappingResponse updateApiMappingResponse;
    public UpdateApiMappingResponse withUpdateApiMappingResponse(openapisdk.models.shared.UpdateApiMappingResponse updateApiMappingResponse) {
        this.updateApiMappingResponse = updateApiMappingResponse;
        return this;
    }
}