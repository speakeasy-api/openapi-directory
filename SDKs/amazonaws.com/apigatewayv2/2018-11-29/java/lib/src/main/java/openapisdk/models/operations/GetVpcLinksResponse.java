package openapisdk.models.operations;



public class GetVpcLinksResponse {
    public Object badRequestException;
    public GetVpcLinksResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetVpcLinksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVpcLinksResponse getVpcLinksResponse;
    public GetVpcLinksResponse withGetVpcLinksResponse(openapisdk.models.shared.GetVpcLinksResponse getVpcLinksResponse) {
        this.getVpcLinksResponse = getVpcLinksResponse;
        return this;
    }
    public Long statusCode;
    public GetVpcLinksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetVpcLinksResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}