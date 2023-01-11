package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BranchProtection
 * Branch Protection
**/
public class BranchProtection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_admins")
    public ProtectedBranchAdminEnforced enforceAdmins;
    public BranchProtection withEnforceAdmins(ProtectedBranchAdminEnforced enforceAdmins) {
        this.enforceAdmins = enforceAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BranchProtection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protection_url")
    public String protectionUrl;
    public BranchProtection withProtectionUrl(String protectionUrl) {
        this.protectionUrl = protectionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_conversation_resolution")
    public BranchProtectionRequiredConversationResolution requiredConversationResolution;
    public BranchProtection withRequiredConversationResolution(BranchProtectionRequiredConversationResolution requiredConversationResolution) {
        this.requiredConversationResolution = requiredConversationResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_pull_request_reviews")
    public ProtectedBranchPullRequestReview requiredPullRequestReviews;
    public BranchProtection withRequiredPullRequestReviews(ProtectedBranchPullRequestReview requiredPullRequestReviews) {
        this.requiredPullRequestReviews = requiredPullRequestReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_signatures")
    public BranchProtectionRequiredSignatures requiredSignatures;
    public BranchProtection withRequiredSignatures(BranchProtectionRequiredSignatures requiredSignatures) {
        this.requiredSignatures = requiredSignatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_status_checks")
    public BranchProtectionRequiredStatusChecks requiredStatusChecks;
    public BranchProtection withRequiredStatusChecks(BranchProtectionRequiredStatusChecks requiredStatusChecks) {
        this.requiredStatusChecks = requiredStatusChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public BranchRestrictionPolicy restrictions;
    public BranchProtection withRestrictions(BranchRestrictionPolicy restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public BranchProtection withUrl(String url) {
        this.url = url;
        return this;
    }
}