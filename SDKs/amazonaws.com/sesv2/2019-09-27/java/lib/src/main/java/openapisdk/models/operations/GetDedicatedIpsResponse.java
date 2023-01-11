package openapisdk.models.operations;



public class GetDedicatedIpsResponse {
    public Object badRequestException;
    public GetDedicatedIpsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDedicatedIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDedicatedIpsResponse getDedicatedIpsResponse;
    public GetDedicatedIpsResponse withGetDedicatedIpsResponse(openapisdk.models.shared.GetDedicatedIpsResponse getDedicatedIpsResponse) {
        this.getDedicatedIpsResponse = getDedicatedIpsResponse;
        return this;
    }
    public Object notFoundException;
    public GetDedicatedIpsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDedicatedIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDedicatedIpsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}