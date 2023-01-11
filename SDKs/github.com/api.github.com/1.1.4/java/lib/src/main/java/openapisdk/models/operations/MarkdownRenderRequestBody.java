package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarkdownRenderRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public String context;
    public MarkdownRenderRequestBody withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public MarkdownRenderRequestBodyModeEnum mode;
    public MarkdownRenderRequestBody withMode(MarkdownRenderRequestBodyModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public MarkdownRenderRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}