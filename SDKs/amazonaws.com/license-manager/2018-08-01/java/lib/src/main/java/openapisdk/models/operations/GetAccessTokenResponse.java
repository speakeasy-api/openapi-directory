package openapisdk.models.operations;



public class GetAccessTokenResponse {
    public Object accessDeniedException;
    public GetAccessTokenResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public GetAccessTokenResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public GetAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccessTokenResponse getAccessTokenResponse;
    public GetAccessTokenResponse withGetAccessTokenResponse(openapisdk.models.shared.GetAccessTokenResponse getAccessTokenResponse) {
        this.getAccessTokenResponse = getAccessTokenResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public GetAccessTokenResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public GetAccessTokenResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public GetAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAccessTokenResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}