package openapisdk.models.operations;



public class DeleteBankAccountResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public DeleteBankAccountResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public DeleteBankAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteBankAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public DeleteBankAccountResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteBankAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}