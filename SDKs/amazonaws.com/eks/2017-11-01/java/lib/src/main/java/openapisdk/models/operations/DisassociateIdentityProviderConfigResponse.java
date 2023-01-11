package openapisdk.models.operations;



public class DisassociateIdentityProviderConfigResponse {
    public Object clientException;
    public DisassociateIdentityProviderConfigResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DisassociateIdentityProviderConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateIdentityProviderConfigResponse disassociateIdentityProviderConfigResponse;
    public DisassociateIdentityProviderConfigResponse withDisassociateIdentityProviderConfigResponse(openapisdk.models.shared.DisassociateIdentityProviderConfigResponse disassociateIdentityProviderConfigResponse) {
        this.disassociateIdentityProviderConfigResponse = disassociateIdentityProviderConfigResponse;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateIdentityProviderConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateIdentityProviderConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DisassociateIdentityProviderConfigResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateIdentityProviderConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DisassociateIdentityProviderConfigResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DisassociateIdentityProviderConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}