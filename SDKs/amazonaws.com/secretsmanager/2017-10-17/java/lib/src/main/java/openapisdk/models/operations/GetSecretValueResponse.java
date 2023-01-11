package openapisdk.models.operations;



public class GetSecretValueResponse {
    public String contentType;
    public GetSecretValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object decryptionFailure;
    public GetSecretValueResponse withDecryptionFailure(Object decryptionFailure) {
        this.decryptionFailure = decryptionFailure;
        return this;
    }
    public openapisdk.models.shared.GetSecretValueResponse getSecretValueResponse;
    public GetSecretValueResponse withGetSecretValueResponse(openapisdk.models.shared.GetSecretValueResponse getSecretValueResponse) {
        this.getSecretValueResponse = getSecretValueResponse;
        return this;
    }
    public Object internalServiceError;
    public GetSecretValueResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public GetSecretValueResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public GetSecretValueResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSecretValueResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSecretValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}