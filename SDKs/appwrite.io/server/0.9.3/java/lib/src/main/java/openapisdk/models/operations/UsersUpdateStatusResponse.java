package openapisdk.models.operations;



public class UsersUpdateStatusResponse {
    public String contentType;
    public UsersUpdateStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersUpdateStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public UsersUpdateStatusResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}