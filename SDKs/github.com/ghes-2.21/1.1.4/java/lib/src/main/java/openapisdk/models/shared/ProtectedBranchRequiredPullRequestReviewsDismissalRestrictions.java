package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions {
    @JsonProperty("teams")
    public Team[] teams;
    public ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions withTeams(Team[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonProperty("teams_url")
    public String teamsUrl;
    public ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("users")
    public SimpleUser[] users;
    public ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions withUsers(SimpleUser[] users) {
        this.users = users;
        return this;
    }
    @JsonProperty("users_url")
    public String usersUrl;
    public ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions withUsersUrl(String usersUrl) {
        this.usersUrl = usersUrl;
        return this;
    }
}