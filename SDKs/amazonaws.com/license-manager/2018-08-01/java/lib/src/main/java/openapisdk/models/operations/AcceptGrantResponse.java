package openapisdk.models.operations;



public class AcceptGrantResponse {
    public openapisdk.models.shared.AcceptGrantResponse acceptGrantResponse;
    public AcceptGrantResponse withAcceptGrantResponse(openapisdk.models.shared.AcceptGrantResponse acceptGrantResponse) {
        this.acceptGrantResponse = acceptGrantResponse;
        return this;
    }
    public Object accessDeniedException;
    public AcceptGrantResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public AcceptGrantResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public AcceptGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public AcceptGrantResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public AcceptGrantResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public AcceptGrantResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public AcceptGrantResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public AcceptGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AcceptGrantResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}