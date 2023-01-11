package openapisdk.models.operations;



public class GetGrantResponse {
    public Object accessDeniedException;
    public GetGrantResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public GetGrantResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public GetGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGrantResponse getGrantResponse;
    public GetGrantResponse withGetGrantResponse(openapisdk.models.shared.GetGrantResponse getGrantResponse) {
        this.getGrantResponse = getGrantResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetGrantResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public GetGrantResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public GetGrantResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public GetGrantResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public GetGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetGrantResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}