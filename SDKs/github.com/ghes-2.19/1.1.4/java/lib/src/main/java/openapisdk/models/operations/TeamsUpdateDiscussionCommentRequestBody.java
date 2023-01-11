package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsUpdateDiscussionCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsUpdateDiscussionCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}