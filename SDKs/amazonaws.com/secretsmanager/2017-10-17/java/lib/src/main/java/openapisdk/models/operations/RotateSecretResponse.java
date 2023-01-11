package openapisdk.models.operations;



public class RotateSecretResponse {
    public String contentType;
    public RotateSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public RotateSecretResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public RotateSecretResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public RotateSecretResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public RotateSecretResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RotateSecretResponse rotateSecretResponse;
    public RotateSecretResponse withRotateSecretResponse(openapisdk.models.shared.RotateSecretResponse rotateSecretResponse) {
        this.rotateSecretResponse = rotateSecretResponse;
        return this;
    }
    public Long statusCode;
    public RotateSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}