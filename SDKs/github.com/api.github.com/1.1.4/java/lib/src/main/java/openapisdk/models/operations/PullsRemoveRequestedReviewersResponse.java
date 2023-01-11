package openapisdk.models.operations;



public class PullsRemoveRequestedReviewersResponse {
    public String contentType;
    public PullsRemoveRequestedReviewersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsRemoveRequestedReviewersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsRemoveRequestedReviewersResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}