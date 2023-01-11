package openapisdk.models.operations;



public class CreateUserPoolClientResponse {
    public String contentType;
    public CreateUserPoolClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUserPoolClientResponse createUserPoolClientResponse;
    public CreateUserPoolClientResponse withCreateUserPoolClientResponse(openapisdk.models.shared.CreateUserPoolClientResponse createUserPoolClientResponse) {
        this.createUserPoolClientResponse = createUserPoolClientResponse;
        return this;
    }
    public Object internalErrorException;
    public CreateUserPoolClientResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOAuthFlowException;
    public CreateUserPoolClientResponse withInvalidOAuthFlowException(Object invalidOAuthFlowException) {
        this.invalidOAuthFlowException = invalidOAuthFlowException;
        return this;
    }
    public Object invalidParameterException;
    public CreateUserPoolClientResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateUserPoolClientResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public CreateUserPoolClientResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateUserPoolClientResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object scopeDoesNotExistException;
    public CreateUserPoolClientResponse withScopeDoesNotExistException(Object scopeDoesNotExistException) {
        this.scopeDoesNotExistException = scopeDoesNotExistException;
        return this;
    }
    public Long statusCode;
    public CreateUserPoolClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateUserPoolClientResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}