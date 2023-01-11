package openapisdk.models.operations;



public class GetDedicatedIpResponse {
    public Object badRequestException;
    public GetDedicatedIpResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDedicatedIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDedicatedIpResponse getDedicatedIpResponse;
    public GetDedicatedIpResponse withGetDedicatedIpResponse(openapisdk.models.shared.GetDedicatedIpResponse getDedicatedIpResponse) {
        this.getDedicatedIpResponse = getDedicatedIpResponse;
        return this;
    }
    public Object notFoundException;
    public GetDedicatedIpResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDedicatedIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDedicatedIpResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}