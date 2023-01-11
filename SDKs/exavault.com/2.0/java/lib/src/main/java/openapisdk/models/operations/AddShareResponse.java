package openapisdk.models.operations;



public class AddShareResponse {
    public String contentType;
    public AddShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShareResponse shareResponse;
    public AddShareResponse withShareResponse(openapisdk.models.shared.ShareResponse shareResponse) {
        this.shareResponse = shareResponse;
        return this;
    }
    public Long statusCode;
    public AddShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}