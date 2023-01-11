package openapisdk.models.operations;



public class CreateApiKeyResponse {
    public Object apiKeyLimitExceededException;
    public CreateApiKeyResponse withApiKeyLimitExceededException(Object apiKeyLimitExceededException) {
        this.apiKeyLimitExceededException = apiKeyLimitExceededException;
        return this;
    }
    public Object apiKeyValidityOutOfBoundsException;
    public CreateApiKeyResponse withApiKeyValidityOutOfBoundsException(Object apiKeyValidityOutOfBoundsException) {
        this.apiKeyValidityOutOfBoundsException = apiKeyValidityOutOfBoundsException;
        return this;
    }
    public Object badRequestException;
    public CreateApiKeyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateApiKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApiKeyResponse createApiKeyResponse;
    public CreateApiKeyResponse withCreateApiKeyResponse(openapisdk.models.shared.CreateApiKeyResponse createApiKeyResponse) {
        this.createApiKeyResponse = createApiKeyResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateApiKeyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateApiKeyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateApiKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateApiKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateApiKeyResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}