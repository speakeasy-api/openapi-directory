package openapisdk.models.operations;



public class UsersGetResponse {
    public String contentType;
    public UsersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public UsersGetResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}