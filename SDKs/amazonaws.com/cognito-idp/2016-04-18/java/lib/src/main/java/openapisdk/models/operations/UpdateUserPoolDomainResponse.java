package openapisdk.models.operations;



public class UpdateUserPoolDomainResponse {
    public String contentType;
    public UpdateUserPoolDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateUserPoolDomainResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateUserPoolDomainResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateUserPoolDomainResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateUserPoolDomainResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateUserPoolDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateUserPoolDomainResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateUserPoolDomainResponse updateUserPoolDomainResponse;
    public UpdateUserPoolDomainResponse withUpdateUserPoolDomainResponse(openapisdk.models.shared.UpdateUserPoolDomainResponse updateUserPoolDomainResponse) {
        this.updateUserPoolDomainResponse = updateUserPoolDomainResponse;
        return this;
    }
}