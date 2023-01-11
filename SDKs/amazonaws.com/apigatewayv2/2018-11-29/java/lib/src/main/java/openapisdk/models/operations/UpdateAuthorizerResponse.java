package openapisdk.models.operations;



public class UpdateAuthorizerResponse {
    public Object badRequestException;
    public UpdateAuthorizerResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateAuthorizerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateAuthorizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateAuthorizerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAuthorizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateAuthorizerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateAuthorizerResponse updateAuthorizerResponse;
    public UpdateAuthorizerResponse withUpdateAuthorizerResponse(openapisdk.models.shared.UpdateAuthorizerResponse updateAuthorizerResponse) {
        this.updateAuthorizerResponse = updateAuthorizerResponse;
        return this;
    }
}