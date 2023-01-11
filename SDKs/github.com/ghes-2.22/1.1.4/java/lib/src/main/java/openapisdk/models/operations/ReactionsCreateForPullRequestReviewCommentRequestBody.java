package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForPullRequestReviewCommentRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum content;
    public ReactionsCreateForPullRequestReviewCommentRequestBody withContent(ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}