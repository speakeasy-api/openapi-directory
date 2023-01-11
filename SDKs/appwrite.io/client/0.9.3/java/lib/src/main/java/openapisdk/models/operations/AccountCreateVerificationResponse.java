package openapisdk.models.operations;



public class AccountCreateVerificationResponse {
    public String contentType;
    public AccountCreateVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCreateVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Token token;
    public AccountCreateVerificationResponse withToken(openapisdk.models.shared.Token token) {
        this.token = token;
        return this;
    }
}