package openapisdk.models.operations;



public class AccountUpdateNameResponse {
    public String contentType;
    public AccountUpdateNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountUpdateNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AccountUpdateNameResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}