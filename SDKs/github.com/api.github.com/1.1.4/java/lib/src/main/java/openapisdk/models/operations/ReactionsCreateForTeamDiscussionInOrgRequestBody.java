package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForTeamDiscussionInOrgRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum content;
    public ReactionsCreateForTeamDiscussionInOrgRequestBody withContent(ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}