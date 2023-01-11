package openapisdk.models.operations;



public class AccountCreateResponse {
    public String contentType;
    public AccountCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AccountCreateResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}