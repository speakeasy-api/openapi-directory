package openapisdk.models.operations;



public class AccountUpdateRecoveryResponse {
    public String contentType;
    public AccountUpdateRecoveryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountUpdateRecoveryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Token token;
    public AccountUpdateRecoveryResponse withToken(openapisdk.models.shared.Token token) {
        this.token = token;
        return this;
    }
}