package openapisdk.models.operations;



public class ReplicateSecretToRegionsResponse {
    public String contentType;
    public ReplicateSecretToRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ReplicateSecretToRegionsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public ReplicateSecretToRegionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ReplicateSecretToRegionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ReplicateSecretToRegionsResponse replicateSecretToRegionsResponse;
    public ReplicateSecretToRegionsResponse withReplicateSecretToRegionsResponse(openapisdk.models.shared.ReplicateSecretToRegionsResponse replicateSecretToRegionsResponse) {
        this.replicateSecretToRegionsResponse = replicateSecretToRegionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ReplicateSecretToRegionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ReplicateSecretToRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}