package openapisdk.models.operations;



public class ListUsersResponse {
    public String contentType;
    public ListUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserCollectionResponse userCollectionResponse;
    public ListUsersResponse withUserCollectionResponse(openapisdk.models.shared.UserCollectionResponse userCollectionResponse) {
        this.userCollectionResponse = userCollectionResponse;
        return this;
    }
}