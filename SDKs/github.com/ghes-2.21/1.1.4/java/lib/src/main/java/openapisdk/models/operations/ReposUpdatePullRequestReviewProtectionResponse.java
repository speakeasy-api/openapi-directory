package openapisdk.models.operations;



public class ReposUpdatePullRequestReviewProtectionResponse {
    public String contentType;
    public ReposUpdatePullRequestReviewProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdatePullRequestReviewProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProtectedBranchPullRequestReview protectedBranchPullRequestReview;
    public ReposUpdatePullRequestReviewProtectionResponse withProtectedBranchPullRequestReview(openapisdk.models.shared.ProtectedBranchPullRequestReview protectedBranchPullRequestReview) {
        this.protectedBranchPullRequestReview = protectedBranchPullRequestReview;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposUpdatePullRequestReviewProtectionResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}