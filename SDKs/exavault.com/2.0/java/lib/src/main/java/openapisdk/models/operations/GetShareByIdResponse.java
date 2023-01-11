package openapisdk.models.operations;



public class GetShareByIdResponse {
    public String contentType;
    public GetShareByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShareResponse shareResponse;
    public GetShareByIdResponse withShareResponse(openapisdk.models.shared.ShareResponse shareResponse) {
        this.shareResponse = shareResponse;
        return this;
    }
    public Long statusCode;
    public GetShareByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}