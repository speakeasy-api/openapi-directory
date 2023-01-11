package openapisdk.models.operations;



public class AccountUpdateEmailResponse {
    public String contentType;
    public AccountUpdateEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountUpdateEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AccountUpdateEmailResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}