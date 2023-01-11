package openapisdk.models.operations;



public class PrivateAccountResponse {
    public openapisdk.models.shared.Account account;
    public PrivateAccountResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public PrivateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateAccountResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}