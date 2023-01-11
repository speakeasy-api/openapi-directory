package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLexiconRequestBody {
    @JsonProperty("Content")
    public String content;
    public PutLexiconRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
}