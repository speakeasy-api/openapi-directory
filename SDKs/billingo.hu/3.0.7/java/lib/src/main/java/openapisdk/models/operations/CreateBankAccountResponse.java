package openapisdk.models.operations;



public class CreateBankAccountResponse {
    public openapisdk.models.shared.BankAccount bankAccount;
    public CreateBankAccountResponse withBankAccount(openapisdk.models.shared.BankAccount bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public CreateBankAccountResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public CreateBankAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateBankAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public CreateBankAccountResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public CreateBankAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public CreateBankAccountResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}