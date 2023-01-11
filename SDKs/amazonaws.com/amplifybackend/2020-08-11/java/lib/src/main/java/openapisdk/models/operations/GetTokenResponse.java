package openapisdk.models.operations;



public class GetTokenResponse {
    public Object badRequestException;
    public GetTokenResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public GetTokenResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetTokenResponse getTokenResponse;
    public GetTokenResponse withGetTokenResponse(openapisdk.models.shared.GetTokenResponse getTokenResponse) {
        this.getTokenResponse = getTokenResponse;
        return this;
    }
    public Object notFoundException;
    public GetTokenResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetTokenResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}