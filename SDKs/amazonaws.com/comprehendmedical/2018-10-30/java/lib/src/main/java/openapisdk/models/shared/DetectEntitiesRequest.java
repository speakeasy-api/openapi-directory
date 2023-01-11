package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectEntitiesRequest {
    @JsonProperty("Text")
    public String text;
    public DetectEntitiesRequest withText(String text) {
        this.text = text;
        return this;
    }
}