package openapisdk.models.operations;



public class ListIdentityProviderConfigsResponse {
    public Object clientException;
    public ListIdentityProviderConfigsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListIdentityProviderConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListIdentityProviderConfigsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListIdentityProviderConfigsResponse listIdentityProviderConfigsResponse;
    public ListIdentityProviderConfigsResponse withListIdentityProviderConfigsResponse(openapisdk.models.shared.ListIdentityProviderConfigsResponse listIdentityProviderConfigsResponse) {
        this.listIdentityProviderConfigsResponse = listIdentityProviderConfigsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListIdentityProviderConfigsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public ListIdentityProviderConfigsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListIdentityProviderConfigsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListIdentityProviderConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}