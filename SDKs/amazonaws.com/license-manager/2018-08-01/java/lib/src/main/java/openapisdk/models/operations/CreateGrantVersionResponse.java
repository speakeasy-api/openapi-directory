package openapisdk.models.operations;



public class CreateGrantVersionResponse {
    public Object accessDeniedException;
    public CreateGrantVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CreateGrantVersionResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public CreateGrantVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGrantVersionResponse createGrantVersionResponse;
    public CreateGrantVersionResponse withCreateGrantVersionResponse(openapisdk.models.shared.CreateGrantVersionResponse createGrantVersionResponse) {
        this.createGrantVersionResponse = createGrantVersionResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateGrantVersionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public CreateGrantVersionResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateGrantVersionResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public CreateGrantVersionResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CreateGrantVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateGrantVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}