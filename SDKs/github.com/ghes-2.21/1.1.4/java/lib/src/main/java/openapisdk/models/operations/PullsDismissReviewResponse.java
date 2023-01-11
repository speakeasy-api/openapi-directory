package openapisdk.models.operations;



public class PullsDismissReviewResponse {
    public String contentType;
    public PullsDismissReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsDismissReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsDismissReviewResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestReview pullRequestReview;
    public PullsDismissReviewResponse withPullRequestReview(openapisdk.models.shared.PullRequestReview pullRequestReview) {
        this.pullRequestReview = pullRequestReview;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public PullsDismissReviewResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}