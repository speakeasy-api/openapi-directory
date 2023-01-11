package openapisdk.models.operations;



public class UpdateApiKeyResponse {
    public Object apiKeyValidityOutOfBoundsException;
    public UpdateApiKeyResponse withApiKeyValidityOutOfBoundsException(Object apiKeyValidityOutOfBoundsException) {
        this.apiKeyValidityOutOfBoundsException = apiKeyValidityOutOfBoundsException;
        return this;
    }
    public Object badRequestException;
    public UpdateApiKeyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateApiKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateApiKeyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public UpdateApiKeyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateApiKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateApiKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateApiKeyResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateApiKeyResponse updateApiKeyResponse;
    public UpdateApiKeyResponse withUpdateApiKeyResponse(openapisdk.models.shared.UpdateApiKeyResponse updateApiKeyResponse) {
        this.updateApiKeyResponse = updateApiKeyResponse;
        return this;
    }
}