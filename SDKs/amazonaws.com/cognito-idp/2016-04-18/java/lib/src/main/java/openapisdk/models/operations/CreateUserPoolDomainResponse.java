package openapisdk.models.operations;



public class CreateUserPoolDomainResponse {
    public String contentType;
    public CreateUserPoolDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUserPoolDomainResponse createUserPoolDomainResponse;
    public CreateUserPoolDomainResponse withCreateUserPoolDomainResponse(openapisdk.models.shared.CreateUserPoolDomainResponse createUserPoolDomainResponse) {
        this.createUserPoolDomainResponse = createUserPoolDomainResponse;
        return this;
    }
    public Object internalErrorException;
    public CreateUserPoolDomainResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateUserPoolDomainResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateUserPoolDomainResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public CreateUserPoolDomainResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateUserPoolDomainResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateUserPoolDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}