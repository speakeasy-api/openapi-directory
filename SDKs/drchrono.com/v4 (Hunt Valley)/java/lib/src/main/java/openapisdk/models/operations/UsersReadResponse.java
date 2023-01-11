package openapisdk.models.operations;



public class UsersReadResponse {
    public String contentType;
    public UsersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserProfile userProfile;
    public UsersReadResponse withUserProfile(openapisdk.models.shared.UserProfile userProfile) {
        this.userProfile = userProfile;
        return this;
    }
}