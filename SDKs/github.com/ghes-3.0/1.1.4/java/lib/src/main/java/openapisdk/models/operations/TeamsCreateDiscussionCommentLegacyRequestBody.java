package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateDiscussionCommentLegacyRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsCreateDiscussionCommentLegacyRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}