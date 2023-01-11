package openapisdk.models.operations;



public class CreateAuthorizerResponse {
    public Object badRequestException;
    public CreateAuthorizerResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateAuthorizerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateAuthorizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAuthorizerResponse createAuthorizerResponse;
    public CreateAuthorizerResponse withCreateAuthorizerResponse(openapisdk.models.shared.CreateAuthorizerResponse createAuthorizerResponse) {
        this.createAuthorizerResponse = createAuthorizerResponse;
        return this;
    }
    public Object notFoundException;
    public CreateAuthorizerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateAuthorizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateAuthorizerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}