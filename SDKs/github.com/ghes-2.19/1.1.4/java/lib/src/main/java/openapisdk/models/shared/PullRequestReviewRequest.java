package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PullRequestReviewRequest
 * Pull Request Review Request
**/
public class PullRequestReviewRequest {
    @JsonProperty("teams")
    public TeamSimple[] teams;
    public PullRequestReviewRequest withTeams(TeamSimple[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonProperty("users")
    public SimpleUser[] users;
    public PullRequestReviewRequest withUsers(SimpleUser[] users) {
        this.users = users;
        return this;
    }
}