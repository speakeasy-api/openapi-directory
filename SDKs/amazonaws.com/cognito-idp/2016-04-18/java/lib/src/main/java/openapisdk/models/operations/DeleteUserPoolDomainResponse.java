package openapisdk.models.operations;



public class DeleteUserPoolDomainResponse {
    public String contentType;
    public DeleteUserPoolDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteUserPoolDomainResponse;
    public DeleteUserPoolDomainResponse withDeleteUserPoolDomainResponse(java.util.Map<String, Object> deleteUserPoolDomainResponse) {
        this.deleteUserPoolDomainResponse = deleteUserPoolDomainResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteUserPoolDomainResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteUserPoolDomainResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DeleteUserPoolDomainResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteUserPoolDomainResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteUserPoolDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}