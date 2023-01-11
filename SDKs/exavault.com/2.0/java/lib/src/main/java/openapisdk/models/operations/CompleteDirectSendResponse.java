package openapisdk.models.operations;



public class CompleteDirectSendResponse {
    public String contentType;
    public CompleteDirectSendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShareResponse shareResponse;
    public CompleteDirectSendResponse withShareResponse(openapisdk.models.shared.ShareResponse shareResponse) {
        this.shareResponse = shareResponse;
        return this;
    }
    public Long statusCode;
    public CompleteDirectSendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}