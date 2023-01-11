package openapisdk.models.operations;



public class AccountUpdatePrefsResponse {
    public String contentType;
    public AccountUpdatePrefsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountUpdatePrefsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AccountUpdatePrefsResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}