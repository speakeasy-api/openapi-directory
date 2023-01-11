package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForTeamDiscussionCommentLegacyRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum content;
    public ReactionsCreateForTeamDiscussionCommentLegacyRequestBody withContent(ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}