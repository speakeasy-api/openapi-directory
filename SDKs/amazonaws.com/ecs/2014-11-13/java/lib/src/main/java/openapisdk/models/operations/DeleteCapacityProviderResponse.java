package openapisdk.models.operations;



public class DeleteCapacityProviderResponse {
    public Object clientException;
    public DeleteCapacityProviderResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteCapacityProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteCapacityProviderResponse deleteCapacityProviderResponse;
    public DeleteCapacityProviderResponse withDeleteCapacityProviderResponse(openapisdk.models.shared.DeleteCapacityProviderResponse deleteCapacityProviderResponse) {
        this.deleteCapacityProviderResponse = deleteCapacityProviderResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteCapacityProviderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DeleteCapacityProviderResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteCapacityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}