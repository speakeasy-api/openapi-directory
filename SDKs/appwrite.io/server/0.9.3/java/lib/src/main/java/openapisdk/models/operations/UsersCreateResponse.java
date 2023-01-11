package openapisdk.models.operations;



public class UsersCreateResponse {
    public String contentType;
    public UsersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public UsersCreateResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}