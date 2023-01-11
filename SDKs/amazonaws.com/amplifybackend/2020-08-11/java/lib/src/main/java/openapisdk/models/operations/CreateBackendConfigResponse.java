package openapisdk.models.operations;



public class CreateBackendConfigResponse {
    public Object badRequestException;
    public CreateBackendConfigResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateBackendConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBackendConfigResponse createBackendConfigResponse;
    public CreateBackendConfigResponse withCreateBackendConfigResponse(openapisdk.models.shared.CreateBackendConfigResponse createBackendConfigResponse) {
        this.createBackendConfigResponse = createBackendConfigResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public CreateBackendConfigResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public CreateBackendConfigResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBackendConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateBackendConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}