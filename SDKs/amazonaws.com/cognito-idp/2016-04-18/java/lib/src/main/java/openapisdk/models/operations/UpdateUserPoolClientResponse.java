package openapisdk.models.operations;



public class UpdateUserPoolClientResponse {
    public Object concurrentModificationException;
    public UpdateUserPoolClientResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateUserPoolClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateUserPoolClientResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOAuthFlowException;
    public UpdateUserPoolClientResponse withInvalidOAuthFlowException(Object invalidOAuthFlowException) {
        this.invalidOAuthFlowException = invalidOAuthFlowException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateUserPoolClientResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateUserPoolClientResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateUserPoolClientResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object scopeDoesNotExistException;
    public UpdateUserPoolClientResponse withScopeDoesNotExistException(Object scopeDoesNotExistException) {
        this.scopeDoesNotExistException = scopeDoesNotExistException;
        return this;
    }
    public Long statusCode;
    public UpdateUserPoolClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateUserPoolClientResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateUserPoolClientResponse updateUserPoolClientResponse;
    public UpdateUserPoolClientResponse withUpdateUserPoolClientResponse(openapisdk.models.shared.UpdateUserPoolClientResponse updateUserPoolClientResponse) {
        this.updateUserPoolClientResponse = updateUserPoolClientResponse;
        return this;
    }
}