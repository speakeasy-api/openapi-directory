package openapisdk.models.operations;



public class ListSecretVersionIdsResponse {
    public String contentType;
    public ListSecretVersionIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListSecretVersionIdsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSecretVersionIdsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListSecretVersionIdsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListSecretVersionIdsResponse listSecretVersionIdsResponse;
    public ListSecretVersionIdsResponse withListSecretVersionIdsResponse(openapisdk.models.shared.ListSecretVersionIdsResponse listSecretVersionIdsResponse) {
        this.listSecretVersionIdsResponse = listSecretVersionIdsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListSecretVersionIdsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListSecretVersionIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}