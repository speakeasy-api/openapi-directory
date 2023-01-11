package openapisdk.models.operations;



public class PostDeleteBankAccountsResponse {
    public String contentType;
    public PostDeleteBankAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object genericResponse;
    public PostDeleteBankAccountsResponse withGenericResponse(Object genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public Object serviceError;
    public PostDeleteBankAccountsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostDeleteBankAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}