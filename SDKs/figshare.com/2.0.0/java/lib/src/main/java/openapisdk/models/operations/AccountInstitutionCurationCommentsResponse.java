package openapisdk.models.operations;



public class AccountInstitutionCurationCommentsResponse {
    public String contentType;
    public AccountInstitutionCurationCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CurationComment curationComment;
    public AccountInstitutionCurationCommentsResponse withCurationComment(openapisdk.models.shared.CurationComment curationComment) {
        this.curationComment = curationComment;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public AccountInstitutionCurationCommentsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public AccountInstitutionCurationCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}