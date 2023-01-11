package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsRemoveRequestedReviewersRequestBody {
    @JsonProperty("reviewers")
    public String[] reviewers;
    public PullsRemoveRequestedReviewersRequestBody withReviewers(String[] reviewers) {
        this.reviewers = reviewers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_reviewers")
    public String[] teamReviewers;
    public PullsRemoveRequestedReviewersRequestBody withTeamReviewers(String[] teamReviewers) {
        this.teamReviewers = teamReviewers;
        return this;
    }
}