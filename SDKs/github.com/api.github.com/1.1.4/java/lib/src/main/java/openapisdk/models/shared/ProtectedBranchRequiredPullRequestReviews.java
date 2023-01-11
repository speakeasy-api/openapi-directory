package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProtectedBranchRequiredPullRequestReviews {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismiss_stale_reviews")
    public Boolean dismissStaleReviews;
    public ProtectedBranchRequiredPullRequestReviews withDismissStaleReviews(Boolean dismissStaleReviews) {
        this.dismissStaleReviews = dismissStaleReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissal_restrictions")
    public ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions dismissalRestrictions;
    public ProtectedBranchRequiredPullRequestReviews withDismissalRestrictions(ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions dismissalRestrictions) {
        this.dismissalRestrictions = dismissalRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_code_owner_reviews")
    public Boolean requireCodeOwnerReviews;
    public ProtectedBranchRequiredPullRequestReviews withRequireCodeOwnerReviews(Boolean requireCodeOwnerReviews) {
        this.requireCodeOwnerReviews = requireCodeOwnerReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_approving_review_count")
    public Long requiredApprovingReviewCount;
    public ProtectedBranchRequiredPullRequestReviews withRequiredApprovingReviewCount(Long requiredApprovingReviewCount) {
        this.requiredApprovingReviewCount = requiredApprovingReviewCount;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProtectedBranchRequiredPullRequestReviews withUrl(String url) {
        this.url = url;
        return this;
    }
}