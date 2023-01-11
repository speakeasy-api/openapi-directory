package openapisdk.models.operations;



public class UpdateBankAccountResponse {
    public openapisdk.models.shared.BankAccount bankAccount;
    public UpdateBankAccountResponse withBankAccount(openapisdk.models.shared.BankAccount bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public UpdateBankAccountResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public UpdateBankAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateBankAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public UpdateBankAccountResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateBankAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public UpdateBankAccountResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}