package openapisdk.models.operations;



public class DeleteGrantResponse {
    public Object accessDeniedException;
    public DeleteGrantResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public DeleteGrantResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public DeleteGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteGrantResponse deleteGrantResponse;
    public DeleteGrantResponse withDeleteGrantResponse(openapisdk.models.shared.DeleteGrantResponse deleteGrantResponse) {
        this.deleteGrantResponse = deleteGrantResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteGrantResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public DeleteGrantResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public DeleteGrantResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public DeleteGrantResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public DeleteGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteGrantResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}