package openapisdk.models.operations;



public class GetCognitoEventsResponse {
    public String contentType;
    public GetCognitoEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCognitoEventsResponse getCognitoEventsResponse;
    public GetCognitoEventsResponse withGetCognitoEventsResponse(openapisdk.models.shared.GetCognitoEventsResponse getCognitoEventsResponse) {
        this.getCognitoEventsResponse = getCognitoEventsResponse;
        return this;
    }
    public Object internalErrorException;
    public GetCognitoEventsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetCognitoEventsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetCognitoEventsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCognitoEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCognitoEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetCognitoEventsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}