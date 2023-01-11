package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProtectedBranchPullRequestReviewDismissalRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams")
    public Team[] teams;
    public ProtectedBranchPullRequestReviewDismissalRestrictions withTeams(Team[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams_url")
    public String teamsUrl;
    public ProtectedBranchPullRequestReviewDismissalRestrictions withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProtectedBranchPullRequestReviewDismissalRestrictions withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public SimpleUser[] users;
    public ProtectedBranchPullRequestReviewDismissalRestrictions withUsers(SimpleUser[] users) {
        this.users = users;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users_url")
    public String usersUrl;
    public ProtectedBranchPullRequestReviewDismissalRestrictions withUsersUrl(String usersUrl) {
        this.usersUrl = usersUrl;
        return this;
    }
}