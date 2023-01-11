package openapisdk.models.operations;



public class UpdateSecretVersionStageResponse {
    public String contentType;
    public UpdateSecretVersionStageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public UpdateSecretVersionStageResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public UpdateSecretVersionStageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateSecretVersionStageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateSecretVersionStageResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSecretVersionStageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSecretVersionStageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSecretVersionStageResponse updateSecretVersionStageResponse;
    public UpdateSecretVersionStageResponse withUpdateSecretVersionStageResponse(openapisdk.models.shared.UpdateSecretVersionStageResponse updateSecretVersionStageResponse) {
        this.updateSecretVersionStageResponse = updateSecretVersionStageResponse;
        return this;
    }
}