package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectPhiRequest {
    @JsonProperty("Text")
    public String text;
    public DetectPhiRequest withText(String text) {
        this.text = text;
        return this;
    }
}