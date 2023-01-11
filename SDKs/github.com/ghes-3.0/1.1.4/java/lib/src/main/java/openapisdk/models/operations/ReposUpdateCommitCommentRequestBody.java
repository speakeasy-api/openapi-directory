package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposUpdateCommitCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public ReposUpdateCommitCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}