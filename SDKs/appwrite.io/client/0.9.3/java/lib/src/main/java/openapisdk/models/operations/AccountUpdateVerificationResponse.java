package openapisdk.models.operations;



public class AccountUpdateVerificationResponse {
    public String contentType;
    public AccountUpdateVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountUpdateVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Token token;
    public AccountUpdateVerificationResponse withToken(openapisdk.models.shared.Token token) {
        this.token = token;
        return this;
    }
}