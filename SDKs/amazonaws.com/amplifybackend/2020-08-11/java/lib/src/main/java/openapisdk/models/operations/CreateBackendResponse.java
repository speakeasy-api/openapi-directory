package openapisdk.models.operations;



public class CreateBackendResponse {
    public Object badRequestException;
    public CreateBackendResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateBackendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBackendResponse createBackendResponse;
    public CreateBackendResponse withCreateBackendResponse(openapisdk.models.shared.CreateBackendResponse createBackendResponse) {
        this.createBackendResponse = createBackendResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public CreateBackendResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public CreateBackendResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBackendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateBackendResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}