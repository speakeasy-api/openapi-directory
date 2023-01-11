package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GistsCreateRequestBodyFiles {
    @JsonProperty("content")
    public String content;
    public GistsCreateRequestBodyFiles withContent(String content) {
        this.content = content;
        return this;
    }
}