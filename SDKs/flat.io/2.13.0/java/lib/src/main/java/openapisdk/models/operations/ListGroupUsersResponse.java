package openapisdk.models.operations;



public class ListGroupUsersResponse {
    public String contentType;
    public ListGroupUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListGroupUsersResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListGroupUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserPublic[] userPublics;
    public ListGroupUsersResponse withUserPublics(openapisdk.models.shared.UserPublic[] userPublics) {
        this.userPublics = userPublics;
        return this;
    }
}