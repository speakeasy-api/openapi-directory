package openapisdk.models.operations;



public class ReposGetPullRequestReviewProtectionResponse {
    public String contentType;
    public ReposGetPullRequestReviewProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetPullRequestReviewProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProtectedBranchPullRequestReview protectedBranchPullRequestReview;
    public ReposGetPullRequestReviewProtectionResponse withProtectedBranchPullRequestReview(openapisdk.models.shared.ProtectedBranchPullRequestReview protectedBranchPullRequestReview) {
        this.protectedBranchPullRequestReview = protectedBranchPullRequestReview;
        return this;
    }
}