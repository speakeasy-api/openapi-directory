package openapisdk.models.operations;



public class GetBackendApiResponse {
    public Object badRequestException;
    public GetBackendApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBackendApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public GetBackendApiResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetBackendApiResponse getBackendAPIResponse;
    public GetBackendApiResponse withGetBackendApiResponse(openapisdk.models.shared.GetBackendApiResponse getBackendAPIResponse) {
        this.getBackendAPIResponse = getBackendAPIResponse;
        return this;
    }
    public Object notFoundException;
    public GetBackendApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBackendApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetBackendApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}