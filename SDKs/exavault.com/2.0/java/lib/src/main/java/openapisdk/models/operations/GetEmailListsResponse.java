package openapisdk.models.operations;



public class GetEmailListsResponse {
    public String contentType;
    public GetEmailListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmailListCollectionResponse emailListCollectionResponse;
    public GetEmailListsResponse withEmailListCollectionResponse(openapisdk.models.shared.EmailListCollectionResponse emailListCollectionResponse) {
        this.emailListCollectionResponse = emailListCollectionResponse;
        return this;
    }
    public Long statusCode;
    public GetEmailListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}