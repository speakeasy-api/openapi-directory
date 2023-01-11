package openapisdk.models.operations;



public class CreateBackendAuthResponse {
    public Object badRequestException;
    public CreateBackendAuthResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateBackendAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBackendAuthResponse createBackendAuthResponse;
    public CreateBackendAuthResponse withCreateBackendAuthResponse(openapisdk.models.shared.CreateBackendAuthResponse createBackendAuthResponse) {
        this.createBackendAuthResponse = createBackendAuthResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public CreateBackendAuthResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public CreateBackendAuthResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBackendAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateBackendAuthResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}