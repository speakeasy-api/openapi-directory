package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuesUpdateCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public IssuesUpdateCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}