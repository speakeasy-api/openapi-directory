package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GistsCreateCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public GistsCreateCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}