package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForTeamDiscussionCommentInOrgRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum content;
    public ReactionsCreateForTeamDiscussionCommentInOrgRequestBody withContent(ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}