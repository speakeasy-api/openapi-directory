package openapisdk.models.operations;



public class PullsUpdateReviewResponse {
    public String contentType;
    public PullsUpdateReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsUpdateReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestReview pullRequestReview;
    public PullsUpdateReviewResponse withPullRequestReview(openapisdk.models.shared.PullRequestReview pullRequestReview) {
        this.pullRequestReview = pullRequestReview;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public PullsUpdateReviewResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}