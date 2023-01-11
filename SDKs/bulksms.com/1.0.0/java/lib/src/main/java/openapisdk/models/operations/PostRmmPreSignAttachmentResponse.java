package openapisdk.models.operations;



public class PostRmmPreSignAttachmentResponse {
    public String contentType;
    public PostRmmPreSignAttachmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PreSignInfo preSignInfo;
    public PostRmmPreSignAttachmentResponse withPreSignInfo(openapisdk.models.shared.PreSignInfo preSignInfo) {
        this.preSignInfo = preSignInfo;
        return this;
    }
    public Long statusCode;
    public PostRmmPreSignAttachmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}