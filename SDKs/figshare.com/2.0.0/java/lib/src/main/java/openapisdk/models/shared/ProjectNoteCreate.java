package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectNoteCreate {
    @JsonProperty("text")
    public String text;
    public ProjectNoteCreate withText(String text) {
        this.text = text;
        return this;
    }
}