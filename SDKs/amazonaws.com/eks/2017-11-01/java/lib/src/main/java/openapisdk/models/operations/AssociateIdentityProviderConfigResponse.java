package openapisdk.models.operations;



public class AssociateIdentityProviderConfigResponse {
    public openapisdk.models.shared.AssociateIdentityProviderConfigResponse associateIdentityProviderConfigResponse;
    public AssociateIdentityProviderConfigResponse withAssociateIdentityProviderConfigResponse(openapisdk.models.shared.AssociateIdentityProviderConfigResponse associateIdentityProviderConfigResponse) {
        this.associateIdentityProviderConfigResponse = associateIdentityProviderConfigResponse;
        return this;
    }
    public Object clientException;
    public AssociateIdentityProviderConfigResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public AssociateIdentityProviderConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public AssociateIdentityProviderConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateIdentityProviderConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public AssociateIdentityProviderConfigResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateIdentityProviderConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public AssociateIdentityProviderConfigResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public AssociateIdentityProviderConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}