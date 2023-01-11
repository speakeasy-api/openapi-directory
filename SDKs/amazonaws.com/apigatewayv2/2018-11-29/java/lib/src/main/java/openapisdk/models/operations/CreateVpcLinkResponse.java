package openapisdk.models.operations;



public class CreateVpcLinkResponse {
    public Object badRequestException;
    public CreateVpcLinkResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateVpcLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateVpcLinkResponse createVpcLinkResponse;
    public CreateVpcLinkResponse withCreateVpcLinkResponse(openapisdk.models.shared.CreateVpcLinkResponse createVpcLinkResponse) {
        this.createVpcLinkResponse = createVpcLinkResponse;
        return this;
    }
    public Long statusCode;
    public CreateVpcLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateVpcLinkResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}