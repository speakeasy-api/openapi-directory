package openapisdk.models.operations;



public class AccountUpdatePasswordResponse {
    public String contentType;
    public AccountUpdatePasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountUpdatePasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AccountUpdatePasswordResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}