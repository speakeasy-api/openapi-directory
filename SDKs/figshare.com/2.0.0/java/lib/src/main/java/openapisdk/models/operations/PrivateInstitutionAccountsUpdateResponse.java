package openapisdk.models.operations;



public class PrivateInstitutionAccountsUpdateResponse {
    public String contentType;
    public PrivateInstitutionAccountsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionAccountsUpdateResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateInstitutionAccountsUpdateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionAccountsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}