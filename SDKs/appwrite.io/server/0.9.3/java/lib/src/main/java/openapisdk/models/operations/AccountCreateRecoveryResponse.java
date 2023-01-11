package openapisdk.models.operations;



public class AccountCreateRecoveryResponse {
    public String contentType;
    public AccountCreateRecoveryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCreateRecoveryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Token token;
    public AccountCreateRecoveryResponse withToken(openapisdk.models.shared.Token token) {
        this.token = token;
        return this;
    }
}