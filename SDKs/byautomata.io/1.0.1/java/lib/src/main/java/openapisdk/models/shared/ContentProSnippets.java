package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContentProSnippets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String[] description;
    public ContentProSnippets withDescription(String[] description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String[] text;
    public ContentProSnippets withText(String[] text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String[] title;
    public ContentProSnippets withTitle(String[] title) {
        this.title = title;
        return this;
    }
}