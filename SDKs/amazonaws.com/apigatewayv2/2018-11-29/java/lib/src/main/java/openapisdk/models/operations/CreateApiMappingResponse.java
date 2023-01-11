package openapisdk.models.operations;



public class CreateApiMappingResponse {
    public Object badRequestException;
    public CreateApiMappingResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateApiMappingResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateApiMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApiMappingResponse createApiMappingResponse;
    public CreateApiMappingResponse withCreateApiMappingResponse(openapisdk.models.shared.CreateApiMappingResponse createApiMappingResponse) {
        this.createApiMappingResponse = createApiMappingResponse;
        return this;
    }
    public Object notFoundException;
    public CreateApiMappingResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateApiMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateApiMappingResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}