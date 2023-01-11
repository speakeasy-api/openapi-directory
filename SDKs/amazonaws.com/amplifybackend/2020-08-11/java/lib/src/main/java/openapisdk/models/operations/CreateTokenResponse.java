package openapisdk.models.operations;



public class CreateTokenResponse {
    public Object badRequestException;
    public CreateTokenResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTokenResponse createTokenResponse;
    public CreateTokenResponse withCreateTokenResponse(openapisdk.models.shared.CreateTokenResponse createTokenResponse) {
        this.createTokenResponse = createTokenResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public CreateTokenResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public CreateTokenResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateTokenResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}