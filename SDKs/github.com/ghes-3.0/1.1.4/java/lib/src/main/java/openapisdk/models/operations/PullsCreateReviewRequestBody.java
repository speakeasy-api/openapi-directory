package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsCreateReviewRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public PullsCreateReviewRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public PullsCreateReviewRequestBodyComments[] comments;
    public PullsCreateReviewRequestBody withComments(PullsCreateReviewRequestBodyComments[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_id")
    public String commitId;
    public PullsCreateReviewRequestBody withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public PullsCreateReviewRequestBodyEventEnum event;
    public PullsCreateReviewRequestBody withEvent(PullsCreateReviewRequestBodyEventEnum event) {
        this.event = event;
        return this;
    }
}