package openapisdk.models.operations;



public class PullsSubmitReviewResponse {
    public String contentType;
    public PullsSubmitReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsSubmitReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsSubmitReviewResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestReview pullRequestReview;
    public PullsSubmitReviewResponse withPullRequestReview(openapisdk.models.shared.PullRequestReview pullRequestReview) {
        this.pullRequestReview = pullRequestReview;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public PullsSubmitReviewResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}