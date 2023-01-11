package openapisdk.models.operations;



public class DeleteTokenResponse {
    public Object accessDeniedException;
    public DeleteTokenResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public DeleteTokenResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public DeleteTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTokenResponse;
    public DeleteTokenResponse withDeleteTokenResponse(java.util.Map<String, Object> deleteTokenResponse) {
        this.deleteTokenResponse = deleteTokenResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public DeleteTokenResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object redirectException;
    public DeleteTokenResponse withRedirectException(Object redirectException) {
        this.redirectException = redirectException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTokenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public DeleteTokenResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public DeleteTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteTokenResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}