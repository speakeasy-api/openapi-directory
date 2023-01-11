package openapisdk.models.operations;



public class UsersUpdateVerificationResponse {
    public String contentType;
    public UsersUpdateVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersUpdateVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public UsersUpdateVerificationResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}