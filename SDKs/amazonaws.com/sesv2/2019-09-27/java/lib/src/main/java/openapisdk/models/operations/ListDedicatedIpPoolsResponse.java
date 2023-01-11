package openapisdk.models.operations;



public class ListDedicatedIpPoolsResponse {
    public Object badRequestException;
    public ListDedicatedIpPoolsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListDedicatedIpPoolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDedicatedIpPoolsResponse listDedicatedIpPoolsResponse;
    public ListDedicatedIpPoolsResponse withListDedicatedIpPoolsResponse(openapisdk.models.shared.ListDedicatedIpPoolsResponse listDedicatedIpPoolsResponse) {
        this.listDedicatedIpPoolsResponse = listDedicatedIpPoolsResponse;
        return this;
    }
    public Long statusCode;
    public ListDedicatedIpPoolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDedicatedIpPoolsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}