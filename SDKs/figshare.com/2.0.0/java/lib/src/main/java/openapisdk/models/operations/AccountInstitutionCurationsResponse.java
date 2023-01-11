package openapisdk.models.operations;



public class AccountInstitutionCurationsResponse {
    public String contentType;
    public AccountInstitutionCurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Curation curation;
    public AccountInstitutionCurationsResponse withCuration(openapisdk.models.shared.Curation curation) {
        this.curation = curation;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public AccountInstitutionCurationsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public AccountInstitutionCurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}