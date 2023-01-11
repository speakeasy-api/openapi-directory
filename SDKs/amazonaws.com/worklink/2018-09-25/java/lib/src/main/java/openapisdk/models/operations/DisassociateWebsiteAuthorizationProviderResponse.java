package openapisdk.models.operations;



public class DisassociateWebsiteAuthorizationProviderResponse {
    public String contentType;
    public DisassociateWebsiteAuthorizationProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateWebsiteAuthorizationProviderResponse;
    public DisassociateWebsiteAuthorizationProviderResponse withDisassociateWebsiteAuthorizationProviderResponse(java.util.Map<String, Object> disassociateWebsiteAuthorizationProviderResponse) {
        this.disassociateWebsiteAuthorizationProviderResponse = disassociateWebsiteAuthorizationProviderResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DisassociateWebsiteAuthorizationProviderResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateWebsiteAuthorizationProviderResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public DisassociateWebsiteAuthorizationProviderResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateWebsiteAuthorizationProviderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateWebsiteAuthorizationProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DisassociateWebsiteAuthorizationProviderResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DisassociateWebsiteAuthorizationProviderResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}