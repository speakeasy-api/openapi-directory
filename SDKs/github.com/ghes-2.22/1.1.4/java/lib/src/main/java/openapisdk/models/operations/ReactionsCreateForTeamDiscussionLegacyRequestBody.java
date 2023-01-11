package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForTeamDiscussionLegacyRequestBody {
    @JsonProperty("content")
    public ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum content;
    public ReactionsCreateForTeamDiscussionLegacyRequestBody withContent(ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
}