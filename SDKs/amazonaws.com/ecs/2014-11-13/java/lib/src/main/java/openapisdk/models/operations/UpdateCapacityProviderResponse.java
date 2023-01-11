package openapisdk.models.operations;



public class UpdateCapacityProviderResponse {
    public Object clientException;
    public UpdateCapacityProviderResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateCapacityProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateCapacityProviderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public UpdateCapacityProviderResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateCapacityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateCapacityProviderResponse updateCapacityProviderResponse;
    public UpdateCapacityProviderResponse withUpdateCapacityProviderResponse(openapisdk.models.shared.UpdateCapacityProviderResponse updateCapacityProviderResponse) {
        this.updateCapacityProviderResponse = updateCapacityProviderResponse;
        return this;
    }
}