package openapisdk.models.operations;



public class RemoveBackendConfigResponse {
    public Object badRequestException;
    public RemoveBackendConfigResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public RemoveBackendConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public RemoveBackendConfigResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public RemoveBackendConfigResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.RemoveBackendConfigResponse removeBackendConfigResponse;
    public RemoveBackendConfigResponse withRemoveBackendConfigResponse(openapisdk.models.shared.RemoveBackendConfigResponse removeBackendConfigResponse) {
        this.removeBackendConfigResponse = removeBackendConfigResponse;
        return this;
    }
    public Long statusCode;
    public RemoveBackendConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RemoveBackendConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}