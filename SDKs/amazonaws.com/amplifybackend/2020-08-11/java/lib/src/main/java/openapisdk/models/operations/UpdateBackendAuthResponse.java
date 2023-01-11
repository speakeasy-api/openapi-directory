package openapisdk.models.operations;



public class UpdateBackendAuthResponse {
    public Object badRequestException;
    public UpdateBackendAuthResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateBackendAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public UpdateBackendAuthResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public UpdateBackendAuthResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBackendAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateBackendAuthResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateBackendAuthResponse updateBackendAuthResponse;
    public UpdateBackendAuthResponse withUpdateBackendAuthResponse(openapisdk.models.shared.UpdateBackendAuthResponse updateBackendAuthResponse) {
        this.updateBackendAuthResponse = updateBackendAuthResponse;
        return this;
    }
}