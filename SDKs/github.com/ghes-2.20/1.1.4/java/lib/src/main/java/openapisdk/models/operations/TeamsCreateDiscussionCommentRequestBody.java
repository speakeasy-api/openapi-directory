package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateDiscussionCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsCreateDiscussionCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}