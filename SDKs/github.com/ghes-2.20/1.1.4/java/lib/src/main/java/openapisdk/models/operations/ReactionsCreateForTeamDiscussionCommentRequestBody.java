package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForTeamDiscussionCommentRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum content;
    public ReactionsCreateForTeamDiscussionCommentRequestBody withContent(ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}