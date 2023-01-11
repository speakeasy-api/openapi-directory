package openapisdk.models.operations;



public class ListSharesResponse {
    public String contentType;
    public ListSharesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShareCollectionResponse shareCollectionResponse;
    public ListSharesResponse withShareCollectionResponse(openapisdk.models.shared.ShareCollectionResponse shareCollectionResponse) {
        this.shareCollectionResponse = shareCollectionResponse;
        return this;
    }
    public Long statusCode;
    public ListSharesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}