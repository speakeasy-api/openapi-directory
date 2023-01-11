package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRawMessageContentRequestBody {
    @JsonProperty("content")
    public PutRawMessageContentRequestBodyContent content;
    public PutRawMessageContentRequestBody withContent(PutRawMessageContentRequestBodyContent content) {
        this.content = content;
        return this;
    }
}