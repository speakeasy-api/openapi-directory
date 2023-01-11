package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuesCreateCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public IssuesCreateCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}