package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InferRxNormRequest {
    @JsonProperty("Text")
    public String text;
    public InferRxNormRequest withText(String text) {
        this.text = text;
        return this;
    }
}