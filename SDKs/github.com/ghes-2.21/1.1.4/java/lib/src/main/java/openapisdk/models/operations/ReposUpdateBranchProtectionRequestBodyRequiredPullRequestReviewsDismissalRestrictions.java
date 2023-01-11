package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
public class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams")
    public String[] teams;
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public String[] users;
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions withUsers(String[] users) {
        this.users = users;
        return this;
    }
}