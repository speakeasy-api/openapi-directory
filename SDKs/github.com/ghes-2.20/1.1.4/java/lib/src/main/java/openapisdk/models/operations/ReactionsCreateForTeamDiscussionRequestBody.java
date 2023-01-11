package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForTeamDiscussionRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForTeamDiscussionRequestBodyContentEnum content;
    public ReactionsCreateForTeamDiscussionRequestBody withContent(ReactionsCreateForTeamDiscussionRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}