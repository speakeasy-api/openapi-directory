package openapisdk.models.operations;



public class DeleteApiKeyResponse {
    public Object badRequestException;
    public DeleteApiKeyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteApiKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteApiKeyResponse;
    public DeleteApiKeyResponse withDeleteApiKeyResponse(java.util.Map<String, Object> deleteApiKeyResponse) {
        this.deleteApiKeyResponse = deleteApiKeyResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteApiKeyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteApiKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApiKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteApiKeyResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}