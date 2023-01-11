package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews
 * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
**/
public class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismiss_stale_reviews")
    public Boolean dismissStaleReviews;
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews withDismissStaleReviews(Boolean dismissStaleReviews) {
        this.dismissStaleReviews = dismissStaleReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissal_restrictions")
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions dismissalRestrictions;
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews withDismissalRestrictions(ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions dismissalRestrictions) {
        this.dismissalRestrictions = dismissalRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_code_owner_reviews")
    public Boolean requireCodeOwnerReviews;
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews withRequireCodeOwnerReviews(Boolean requireCodeOwnerReviews) {
        this.requireCodeOwnerReviews = requireCodeOwnerReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_approving_review_count")
    public Long requiredApprovingReviewCount;
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews withRequiredApprovingReviewCount(Long requiredApprovingReviewCount) {
        this.requiredApprovingReviewCount = requiredApprovingReviewCount;
        return this;
    }
}