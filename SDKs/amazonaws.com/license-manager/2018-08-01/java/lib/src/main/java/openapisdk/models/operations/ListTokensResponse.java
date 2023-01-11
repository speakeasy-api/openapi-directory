package openapisdk.models.operations;



public class ListTokensResponse {
    public Object accessDeniedException;
    public ListTokensResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListTokensResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListTokensResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTokensResponse listTokensResponse;
    public ListTokensResponse withListTokensResponse(openapisdk.models.shared.ListTokensResponse listTokensResponse) {
        this.listTokensResponse = listTokensResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListTokensResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListTokensResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListTokensResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTokensResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}