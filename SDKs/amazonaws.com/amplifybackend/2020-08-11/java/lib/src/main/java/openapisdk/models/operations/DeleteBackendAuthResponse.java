package openapisdk.models.operations;



public class DeleteBackendAuthResponse {
    public Object badRequestException;
    public DeleteBackendAuthResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteBackendAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBackendAuthResponse deleteBackendAuthResponse;
    public DeleteBackendAuthResponse withDeleteBackendAuthResponse(openapisdk.models.shared.DeleteBackendAuthResponse deleteBackendAuthResponse) {
        this.deleteBackendAuthResponse = deleteBackendAuthResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public DeleteBackendAuthResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public DeleteBackendAuthResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBackendAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteBackendAuthResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}