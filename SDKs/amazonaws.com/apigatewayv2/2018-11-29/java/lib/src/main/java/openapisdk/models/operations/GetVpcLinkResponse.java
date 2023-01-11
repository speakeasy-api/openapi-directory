package openapisdk.models.operations;



public class GetVpcLinkResponse {
    public String contentType;
    public GetVpcLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVpcLinkResponse getVpcLinkResponse;
    public GetVpcLinkResponse withGetVpcLinkResponse(openapisdk.models.shared.GetVpcLinkResponse getVpcLinkResponse) {
        this.getVpcLinkResponse = getVpcLinkResponse;
        return this;
    }
    public Object notFoundException;
    public GetVpcLinkResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetVpcLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetVpcLinkResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}