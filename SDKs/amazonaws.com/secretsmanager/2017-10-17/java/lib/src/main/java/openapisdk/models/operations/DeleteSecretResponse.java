package openapisdk.models.operations;



public class DeleteSecretResponse {
    public String contentType;
    public DeleteSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSecretResponse deleteSecretResponse;
    public DeleteSecretResponse withDeleteSecretResponse(openapisdk.models.shared.DeleteSecretResponse deleteSecretResponse) {
        this.deleteSecretResponse = deleteSecretResponse;
        return this;
    }
    public Object internalServiceError;
    public DeleteSecretResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public DeleteSecretResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteSecretResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSecretResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}