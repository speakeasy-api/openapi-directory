package openapisdk.models.operations;



public class UpdateShareByIdResponse {
    public String contentType;
    public UpdateShareByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShareResponse shareResponse;
    public UpdateShareByIdResponse withShareResponse(openapisdk.models.shared.ShareResponse shareResponse) {
        this.shareResponse = shareResponse;
        return this;
    }
    public Long statusCode;
    public UpdateShareByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}