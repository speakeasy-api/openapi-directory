package openapisdk.models.operations;



public class RejectGrantResponse {
    public Object accessDeniedException;
    public RejectGrantResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public RejectGrantResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public RejectGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public RejectGrantResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public RejectGrantResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.RejectGrantResponse rejectGrantResponse;
    public RejectGrantResponse withRejectGrantResponse(openapisdk.models.shared.RejectGrantResponse rejectGrantResponse) {
        this.rejectGrantResponse = rejectGrantResponse;
        return this;
    }
    public Object resourceLimitExceededException;
    public RejectGrantResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public RejectGrantResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public RejectGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RejectGrantResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}