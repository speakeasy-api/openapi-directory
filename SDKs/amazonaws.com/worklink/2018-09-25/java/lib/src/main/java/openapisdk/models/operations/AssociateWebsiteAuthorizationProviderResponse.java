package openapisdk.models.operations;



public class AssociateWebsiteAuthorizationProviderResponse {
    public openapisdk.models.shared.AssociateWebsiteAuthorizationProviderResponse associateWebsiteAuthorizationProviderResponse;
    public AssociateWebsiteAuthorizationProviderResponse withAssociateWebsiteAuthorizationProviderResponse(openapisdk.models.shared.AssociateWebsiteAuthorizationProviderResponse associateWebsiteAuthorizationProviderResponse) {
        this.associateWebsiteAuthorizationProviderResponse = associateWebsiteAuthorizationProviderResponse;
        return this;
    }
    public String contentType;
    public AssociateWebsiteAuthorizationProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public AssociateWebsiteAuthorizationProviderResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateWebsiteAuthorizationProviderResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public AssociateWebsiteAuthorizationProviderResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateWebsiteAuthorizationProviderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateWebsiteAuthorizationProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AssociateWebsiteAuthorizationProviderResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public AssociateWebsiteAuthorizationProviderResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}