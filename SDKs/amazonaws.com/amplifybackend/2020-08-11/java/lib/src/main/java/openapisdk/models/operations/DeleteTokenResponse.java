package openapisdk.models.operations;



public class DeleteTokenResponse {
    public Object badRequestException;
    public DeleteTokenResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteTokenResponse deleteTokenResponse;
    public DeleteTokenResponse withDeleteTokenResponse(openapisdk.models.shared.DeleteTokenResponse deleteTokenResponse) {
        this.deleteTokenResponse = deleteTokenResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public DeleteTokenResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public DeleteTokenResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteTokenResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}