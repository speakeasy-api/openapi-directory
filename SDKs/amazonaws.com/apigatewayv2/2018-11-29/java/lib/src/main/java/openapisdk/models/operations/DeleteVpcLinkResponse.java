package openapisdk.models.operations;



public class DeleteVpcLinkResponse {
    public String contentType;
    public DeleteVpcLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteVpcLinkResponse;
    public DeleteVpcLinkResponse withDeleteVpcLinkResponse(java.util.Map<String, Object> deleteVpcLinkResponse) {
        this.deleteVpcLinkResponse = deleteVpcLinkResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteVpcLinkResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteVpcLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteVpcLinkResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}