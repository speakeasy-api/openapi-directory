package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdatePullRequestReviewProtectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismiss_stale_reviews")
    public Boolean dismissStaleReviews;
    public ReposUpdatePullRequestReviewProtectionRequestBody withDismissStaleReviews(Boolean dismissStaleReviews) {
        this.dismissStaleReviews = dismissStaleReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissal_restrictions")
    public ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions dismissalRestrictions;
    public ReposUpdatePullRequestReviewProtectionRequestBody withDismissalRestrictions(ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions dismissalRestrictions) {
        this.dismissalRestrictions = dismissalRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_code_owner_reviews")
    public Boolean requireCodeOwnerReviews;
    public ReposUpdatePullRequestReviewProtectionRequestBody withRequireCodeOwnerReviews(Boolean requireCodeOwnerReviews) {
        this.requireCodeOwnerReviews = requireCodeOwnerReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_approving_review_count")
    public Long requiredApprovingReviewCount;
    public ReposUpdatePullRequestReviewProtectionRequestBody withRequiredApprovingReviewCount(Long requiredApprovingReviewCount) {
        this.requiredApprovingReviewCount = requiredApprovingReviewCount;
        return this;
    }
}