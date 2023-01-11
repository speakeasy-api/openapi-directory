package openapisdk.models.operations;



public class RestoreSecretResponse {
    public String contentType;
    public RestoreSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public RestoreSecretResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public RestoreSecretResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public RestoreSecretResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public RestoreSecretResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RestoreSecretResponse restoreSecretResponse;
    public RestoreSecretResponse withRestoreSecretResponse(openapisdk.models.shared.RestoreSecretResponse restoreSecretResponse) {
        this.restoreSecretResponse = restoreSecretResponse;
        return this;
    }
    public Long statusCode;
    public RestoreSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}