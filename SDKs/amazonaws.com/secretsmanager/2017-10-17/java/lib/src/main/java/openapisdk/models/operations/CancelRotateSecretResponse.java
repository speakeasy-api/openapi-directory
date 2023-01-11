package openapisdk.models.operations;



public class CancelRotateSecretResponse {
    public openapisdk.models.shared.CancelRotateSecretResponse cancelRotateSecretResponse;
    public CancelRotateSecretResponse withCancelRotateSecretResponse(openapisdk.models.shared.CancelRotateSecretResponse cancelRotateSecretResponse) {
        this.cancelRotateSecretResponse = cancelRotateSecretResponse;
        return this;
    }
    public String contentType;
    public CancelRotateSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public CancelRotateSecretResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public CancelRotateSecretResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public CancelRotateSecretResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelRotateSecretResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelRotateSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}