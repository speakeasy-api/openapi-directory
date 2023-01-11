package openapisdk.models.operations;



public class CreateGrantResponse {
    public Object accessDeniedException;
    public CreateGrantResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CreateGrantResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public CreateGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGrantResponse createGrantResponse;
    public CreateGrantResponse withCreateGrantResponse(openapisdk.models.shared.CreateGrantResponse createGrantResponse) {
        this.createGrantResponse = createGrantResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateGrantResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public CreateGrantResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateGrantResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public CreateGrantResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CreateGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateGrantResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}