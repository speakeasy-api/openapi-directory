package openapisdk.models.operations;



public class PostAccountInstitutionReviewCurationIdCommentsResponse {
    public String contentType;
    public PostAccountInstitutionReviewCurationIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PostAccountInstitutionReviewCurationIdCommentsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PostAccountInstitutionReviewCurationIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}