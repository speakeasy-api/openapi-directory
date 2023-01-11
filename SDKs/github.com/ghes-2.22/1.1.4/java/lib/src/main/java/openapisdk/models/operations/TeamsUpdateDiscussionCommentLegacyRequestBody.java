package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsUpdateDiscussionCommentLegacyRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsUpdateDiscussionCommentLegacyRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}