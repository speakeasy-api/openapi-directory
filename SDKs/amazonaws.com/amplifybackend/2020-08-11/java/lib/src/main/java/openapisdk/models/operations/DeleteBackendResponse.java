package openapisdk.models.operations;



public class DeleteBackendResponse {
    public Object badRequestException;
    public DeleteBackendResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteBackendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBackendResponse deleteBackendResponse;
    public DeleteBackendResponse withDeleteBackendResponse(openapisdk.models.shared.DeleteBackendResponse deleteBackendResponse) {
        this.deleteBackendResponse = deleteBackendResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public DeleteBackendResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public DeleteBackendResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBackendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteBackendResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}