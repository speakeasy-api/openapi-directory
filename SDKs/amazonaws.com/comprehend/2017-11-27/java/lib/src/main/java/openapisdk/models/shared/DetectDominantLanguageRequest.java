package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectDominantLanguageRequest {
    @JsonProperty("Text")
    public String text;
    public DetectDominantLanguageRequest withText(String text) {
        this.text = text;
        return this;
    }
}