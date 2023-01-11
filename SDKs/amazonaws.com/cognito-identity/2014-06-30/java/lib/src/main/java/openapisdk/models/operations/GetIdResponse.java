package openapisdk.models.operations;



public class GetIdResponse {
    public String contentType;
    public GetIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object externalServiceException;
    public GetIdResponse withExternalServiceException(Object externalServiceException) {
        this.externalServiceException = externalServiceException;
        return this;
    }
    public openapisdk.models.shared.GetIdResponse getIdResponse;
    public GetIdResponse withGetIdResponse(openapisdk.models.shared.GetIdResponse getIdResponse) {
        this.getIdResponse = getIdResponse;
        return this;
    }
    public Object internalErrorException;
    public GetIdResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetIdResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public GetIdResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public GetIdResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public GetIdResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetIdResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIdResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}