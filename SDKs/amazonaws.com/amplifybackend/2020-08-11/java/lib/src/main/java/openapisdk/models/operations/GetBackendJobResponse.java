package openapisdk.models.operations;



public class GetBackendJobResponse {
    public Object badRequestException;
    public GetBackendJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBackendJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public GetBackendJobResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetBackendJobResponse getBackendJobResponse;
    public GetBackendJobResponse withGetBackendJobResponse(openapisdk.models.shared.GetBackendJobResponse getBackendJobResponse) {
        this.getBackendJobResponse = getBackendJobResponse;
        return this;
    }
    public Object notFoundException;
    public GetBackendJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBackendJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetBackendJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}