package openapisdk.models.operations;



public class UpdateAccountResponse {
    public openapisdk.models.shared.AccountResponse accountResponse;
    public UpdateAccountResponse withAccountResponse(openapisdk.models.shared.AccountResponse accountResponse) {
        this.accountResponse = accountResponse;
        return this;
    }
    public String contentType;
    public UpdateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}