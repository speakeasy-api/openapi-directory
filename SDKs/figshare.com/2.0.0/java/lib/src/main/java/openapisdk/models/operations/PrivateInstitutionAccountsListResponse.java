package openapisdk.models.operations;



public class PrivateInstitutionAccountsListResponse {
    public String contentType;
    public PrivateInstitutionAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionAccountsListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ShortAccount[] shortAccounts;
    public PrivateInstitutionAccountsListResponse withShortAccounts(openapisdk.models.shared.ShortAccount[] shortAccounts) {
        this.shortAccounts = shortAccounts;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}