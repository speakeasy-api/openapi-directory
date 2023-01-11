package openapisdk.models.operations;



public class CreateTokenResponse {
    public Object accessDeniedException;
    public CreateTokenResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CreateTokenResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public CreateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTokenResponse createTokenResponse;
    public CreateTokenResponse withCreateTokenResponse(openapisdk.models.shared.CreateTokenResponse createTokenResponse) {
        this.createTokenResponse = createTokenResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public CreateTokenResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object redirectException;
    public CreateTokenResponse withRedirectException(Object redirectException) {
        this.redirectException = redirectException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateTokenResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateTokenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public CreateTokenResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateTokenResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}