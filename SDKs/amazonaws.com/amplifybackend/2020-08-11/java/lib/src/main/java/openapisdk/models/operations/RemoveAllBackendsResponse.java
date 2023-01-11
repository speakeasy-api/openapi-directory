package openapisdk.models.operations;



public class RemoveAllBackendsResponse {
    public Object badRequestException;
    public RemoveAllBackendsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public RemoveAllBackendsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public RemoveAllBackendsResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public RemoveAllBackendsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.RemoveAllBackendsResponse removeAllBackendsResponse;
    public RemoveAllBackendsResponse withRemoveAllBackendsResponse(openapisdk.models.shared.RemoveAllBackendsResponse removeAllBackendsResponse) {
        this.removeAllBackendsResponse = removeAllBackendsResponse;
        return this;
    }
    public Long statusCode;
    public RemoveAllBackendsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RemoveAllBackendsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}