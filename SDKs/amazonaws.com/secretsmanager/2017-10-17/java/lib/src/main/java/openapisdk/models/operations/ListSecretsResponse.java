package openapisdk.models.operations;



public class ListSecretsResponse {
    public String contentType;
    public ListSecretsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListSecretsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSecretsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListSecretsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListSecretsResponse listSecretsResponse;
    public ListSecretsResponse withListSecretsResponse(openapisdk.models.shared.ListSecretsResponse listSecretsResponse) {
        this.listSecretsResponse = listSecretsResponse;
        return this;
    }
    public Long statusCode;
    public ListSecretsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}