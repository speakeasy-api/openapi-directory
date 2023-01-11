package openapisdk.models.operations;



public class UpdateBackendConfigResponse {
    public Object badRequestException;
    public UpdateBackendConfigResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateBackendConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public UpdateBackendConfigResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public UpdateBackendConfigResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBackendConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateBackendConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateBackendConfigResponse updateBackendConfigResponse;
    public UpdateBackendConfigResponse withUpdateBackendConfigResponse(openapisdk.models.shared.UpdateBackendConfigResponse updateBackendConfigResponse) {
        this.updateBackendConfigResponse = updateBackendConfigResponse;
        return this;
    }
}