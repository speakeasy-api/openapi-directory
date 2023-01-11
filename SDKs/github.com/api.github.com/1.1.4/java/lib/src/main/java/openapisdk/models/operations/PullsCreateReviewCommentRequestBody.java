package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsCreateReviewCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public PullsCreateReviewCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_id")
    public String commitId;
    public PullsCreateReviewCommentRequestBody withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_reply_to")
    public Long inReplyTo;
    public PullsCreateReviewCommentRequestBody withInReplyTo(Long inReplyTo) {
        this.inReplyTo = inReplyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public Long line;
    public PullsCreateReviewCommentRequestBody withLine(Long line) {
        this.line = line;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public PullsCreateReviewCommentRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public PullsCreateReviewCommentRequestBody withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("side")
    public PullsCreateReviewCommentRequestBodySideEnum side;
    public PullsCreateReviewCommentRequestBody withSide(PullsCreateReviewCommentRequestBodySideEnum side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_line")
    public Long startLine;
    public PullsCreateReviewCommentRequestBody withStartLine(Long startLine) {
        this.startLine = startLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_side")
    public PullsCreateReviewCommentRequestBodyStartSideEnum startSide;
    public PullsCreateReviewCommentRequestBody withStartSide(PullsCreateReviewCommentRequestBodyStartSideEnum startSide) {
        this.startSide = startSide;
        return this;
    }
}