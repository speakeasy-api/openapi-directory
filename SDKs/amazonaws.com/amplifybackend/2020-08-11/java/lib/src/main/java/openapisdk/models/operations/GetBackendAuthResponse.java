package openapisdk.models.operations;



public class GetBackendAuthResponse {
    public Object badRequestException;
    public GetBackendAuthResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBackendAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public GetBackendAuthResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetBackendAuthResponse getBackendAuthResponse;
    public GetBackendAuthResponse withGetBackendAuthResponse(openapisdk.models.shared.GetBackendAuthResponse getBackendAuthResponse) {
        this.getBackendAuthResponse = getBackendAuthResponse;
        return this;
    }
    public Object notFoundException;
    public GetBackendAuthResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBackendAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetBackendAuthResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}