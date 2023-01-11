package openapisdk.models.operations;



public class CloneBackendResponse {
    public Object badRequestException;
    public CloneBackendResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public openapisdk.models.shared.CloneBackendResponse cloneBackendResponse;
    public CloneBackendResponse withCloneBackendResponse(openapisdk.models.shared.CloneBackendResponse cloneBackendResponse) {
        this.cloneBackendResponse = cloneBackendResponse;
        return this;
    }
    public String contentType;
    public CloneBackendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public CloneBackendResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public CloneBackendResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CloneBackendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CloneBackendResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}