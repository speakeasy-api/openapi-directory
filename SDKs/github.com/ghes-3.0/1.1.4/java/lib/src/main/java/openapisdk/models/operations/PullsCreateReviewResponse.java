package openapisdk.models.operations;



public class PullsCreateReviewResponse {
    public String contentType;
    public PullsCreateReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsCreateReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsCreateReviewResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestReview pullRequestReview;
    public PullsCreateReviewResponse withPullRequestReview(openapisdk.models.shared.PullRequestReview pullRequestReview) {
        this.pullRequestReview = pullRequestReview;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public PullsCreateReviewResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}