package openapisdk.models.operations;



public class ListWebsiteAuthorizationProvidersResponse {
    public String contentType;
    public ListWebsiteAuthorizationProvidersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListWebsiteAuthorizationProvidersResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public ListWebsiteAuthorizationProvidersResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListWebsiteAuthorizationProvidersResponse listWebsiteAuthorizationProvidersResponse;
    public ListWebsiteAuthorizationProvidersResponse withListWebsiteAuthorizationProvidersResponse(openapisdk.models.shared.ListWebsiteAuthorizationProvidersResponse listWebsiteAuthorizationProvidersResponse) {
        this.listWebsiteAuthorizationProvidersResponse = listWebsiteAuthorizationProvidersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListWebsiteAuthorizationProvidersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListWebsiteAuthorizationProvidersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListWebsiteAuthorizationProvidersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public ListWebsiteAuthorizationProvidersResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}