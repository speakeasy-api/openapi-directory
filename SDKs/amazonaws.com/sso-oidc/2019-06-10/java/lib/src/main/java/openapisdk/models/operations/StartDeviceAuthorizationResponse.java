package openapisdk.models.operations;



public class StartDeviceAuthorizationResponse {
    public String contentType;
    public StartDeviceAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartDeviceAuthorizationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidClientException;
    public StartDeviceAuthorizationResponse withInvalidClientException(Object invalidClientException) {
        this.invalidClientException = invalidClientException;
        return this;
    }
    public Object invalidRequestException;
    public StartDeviceAuthorizationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object slowDownException;
    public StartDeviceAuthorizationResponse withSlowDownException(Object slowDownException) {
        this.slowDownException = slowDownException;
        return this;
    }
    public openapisdk.models.shared.StartDeviceAuthorizationResponse startDeviceAuthorizationResponse;
    public StartDeviceAuthorizationResponse withStartDeviceAuthorizationResponse(openapisdk.models.shared.StartDeviceAuthorizationResponse startDeviceAuthorizationResponse) {
        this.startDeviceAuthorizationResponse = startDeviceAuthorizationResponse;
        return this;
    }
    public Long statusCode;
    public StartDeviceAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedClientException;
    public StartDeviceAuthorizationResponse withUnauthorizedClientException(Object unauthorizedClientException) {
        this.unauthorizedClientException = unauthorizedClientException;
        return this;
    }
}