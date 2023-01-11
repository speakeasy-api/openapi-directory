package openapisdk.models.operations;



public class TestIdentityProviderResponse {
    public String contentType;
    public TestIdentityProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public TestIdentityProviderResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public TestIdentityProviderResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public TestIdentityProviderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public TestIdentityProviderResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public TestIdentityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIdentityProviderResponse testIdentityProviderResponse;
    public TestIdentityProviderResponse withTestIdentityProviderResponse(openapisdk.models.shared.TestIdentityProviderResponse testIdentityProviderResponse) {
        this.testIdentityProviderResponse = testIdentityProviderResponse;
        return this;
    }
}