package openapisdk.models.operations;



public class PrivateInstitutionAccountsSearchResponse {
    public String contentType;
    public PrivateInstitutionAccountsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionAccountsSearchResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ShortAccount[] shortAccounts;
    public PrivateInstitutionAccountsSearchResponse withShortAccounts(openapisdk.models.shared.ShortAccount[] shortAccounts) {
        this.shortAccounts = shortAccounts;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionAccountsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}