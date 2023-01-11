package openapisdk.models.operations;



public class GetBackendResponse {
    public Object badRequestException;
    public GetBackendResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBackendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public GetBackendResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetBackendResponse getBackendResponse;
    public GetBackendResponse withGetBackendResponse(openapisdk.models.shared.GetBackendResponse getBackendResponse) {
        this.getBackendResponse = getBackendResponse;
        return this;
    }
    public Object notFoundException;
    public GetBackendResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBackendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetBackendResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}