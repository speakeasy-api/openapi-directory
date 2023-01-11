package openapisdk.models.operations;



public class DeleteResourceServerResponse {
    public String contentType;
    public DeleteResourceServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public DeleteResourceServerResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteResourceServerResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DeleteResourceServerResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteResourceServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResourceServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteResourceServerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}