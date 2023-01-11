package openapisdk.models.operations;



public class UpdateVpcLinkResponse {
    public Object badRequestException;
    public UpdateVpcLinkResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateVpcLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateVpcLinkResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateVpcLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateVpcLinkResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateVpcLinkResponse updateVpcLinkResponse;
    public UpdateVpcLinkResponse withUpdateVpcLinkResponse(openapisdk.models.shared.UpdateVpcLinkResponse updateVpcLinkResponse) {
        this.updateVpcLinkResponse = updateVpcLinkResponse;
        return this;
    }
}