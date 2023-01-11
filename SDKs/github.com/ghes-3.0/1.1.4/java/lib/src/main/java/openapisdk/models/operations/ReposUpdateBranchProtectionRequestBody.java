package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateBranchProtectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_deletions")
    public Boolean allowDeletions;
    public ReposUpdateBranchProtectionRequestBody withAllowDeletions(Boolean allowDeletions) {
        this.allowDeletions = allowDeletions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_force_pushes")
    public Boolean allowForcePushes;
    public ReposUpdateBranchProtectionRequestBody withAllowForcePushes(Boolean allowForcePushes) {
        this.allowForcePushes = allowForcePushes;
        return this;
    }
    @JsonProperty("enforce_admins")
    public Boolean enforceAdmins;
    public ReposUpdateBranchProtectionRequestBody withEnforceAdmins(Boolean enforceAdmins) {
        this.enforceAdmins = enforceAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_linear_history")
    public Boolean requiredLinearHistory;
    public ReposUpdateBranchProtectionRequestBody withRequiredLinearHistory(Boolean requiredLinearHistory) {
        this.requiredLinearHistory = requiredLinearHistory;
        return this;
    }
    @JsonProperty("required_pull_request_reviews")
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews requiredPullRequestReviews;
    public ReposUpdateBranchProtectionRequestBody withRequiredPullRequestReviews(ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews requiredPullRequestReviews) {
        this.requiredPullRequestReviews = requiredPullRequestReviews;
        return this;
    }
    @JsonProperty("required_status_checks")
    public ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks requiredStatusChecks;
    public ReposUpdateBranchProtectionRequestBody withRequiredStatusChecks(ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks requiredStatusChecks) {
        this.requiredStatusChecks = requiredStatusChecks;
        return this;
    }
    @JsonProperty("restrictions")
    public ReposUpdateBranchProtectionRequestBodyRestrictions restrictions;
    public ReposUpdateBranchProtectionRequestBody withRestrictions(ReposUpdateBranchProtectionRequestBodyRestrictions restrictions) {
        this.restrictions = restrictions;
        return this;
    }
}