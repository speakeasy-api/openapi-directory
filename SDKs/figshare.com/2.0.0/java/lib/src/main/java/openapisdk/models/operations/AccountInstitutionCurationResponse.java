package openapisdk.models.operations;



public class AccountInstitutionCurationResponse {
    public String contentType;
    public AccountInstitutionCurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CurationDetail curationDetail;
    public AccountInstitutionCurationResponse withCurationDetail(openapisdk.models.shared.CurationDetail curationDetail) {
        this.curationDetail = curationDetail;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public AccountInstitutionCurationResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public AccountInstitutionCurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}