package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GistsUpdateCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public GistsUpdateCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}