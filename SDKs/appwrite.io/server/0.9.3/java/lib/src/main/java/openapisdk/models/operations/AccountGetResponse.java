package openapisdk.models.operations;



public class AccountGetResponse {
    public String contentType;
    public AccountGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AccountGetResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}