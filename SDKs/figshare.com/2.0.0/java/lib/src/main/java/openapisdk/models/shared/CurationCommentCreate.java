package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CurationCommentCreate {
    @JsonProperty("text")
    public String text;
    public CurationCommentCreate withText(String text) {
        this.text = text;
        return this;
    }
}