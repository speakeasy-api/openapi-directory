package openapisdk.models.operations;



public class CreateTokenResponse {
    public Object accessDeniedException;
    public CreateTokenResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationPendingException;
    public CreateTokenResponse withAuthorizationPendingException(Object authorizationPendingException) {
        this.authorizationPendingException = authorizationPendingException;
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
    public Object expiredTokenException;
    public CreateTokenResponse withExpiredTokenException(Object expiredTokenException) {
        this.expiredTokenException = expiredTokenException;
        return this;
    }
    public Object internalServerException;
    public CreateTokenResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidClientException;
    public CreateTokenResponse withInvalidClientException(Object invalidClientException) {
        this.invalidClientException = invalidClientException;
        return this;
    }
    public Object invalidGrantException;
    public CreateTokenResponse withInvalidGrantException(Object invalidGrantException) {
        this.invalidGrantException = invalidGrantException;
        return this;
    }
    public Object invalidRequestException;
    public CreateTokenResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidScopeException;
    public CreateTokenResponse withInvalidScopeException(Object invalidScopeException) {
        this.invalidScopeException = invalidScopeException;
        return this;
    }
    public Object slowDownException;
    public CreateTokenResponse withSlowDownException(Object slowDownException) {
        this.slowDownException = slowDownException;
        return this;
    }
    public Long statusCode;
    public CreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedClientException;
    public CreateTokenResponse withUnauthorizedClientException(Object unauthorizedClientException) {
        this.unauthorizedClientException = unauthorizedClientException;
        return this;
    }
    public Object unsupportedGrantTypeException;
    public CreateTokenResponse withUnsupportedGrantTypeException(Object unsupportedGrantTypeException) {
        this.unsupportedGrantTypeException = unsupportedGrantTypeException;
        return this;
    }
}