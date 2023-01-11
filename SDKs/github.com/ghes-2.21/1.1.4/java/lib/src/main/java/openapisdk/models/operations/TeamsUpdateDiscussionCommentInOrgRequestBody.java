package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsUpdateDiscussionCommentInOrgRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsUpdateDiscussionCommentInOrgRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}