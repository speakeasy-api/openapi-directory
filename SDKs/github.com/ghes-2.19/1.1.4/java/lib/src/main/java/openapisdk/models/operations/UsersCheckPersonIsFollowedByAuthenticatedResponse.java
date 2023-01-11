package openapisdk.models.operations;



public class UsersCheckPersonIsFollowedByAuthenticatedResponse {
    public String contentType;
    public UsersCheckPersonIsFollowedByAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersCheckPersonIsFollowedByAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersCheckPersonIsFollowedByAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}