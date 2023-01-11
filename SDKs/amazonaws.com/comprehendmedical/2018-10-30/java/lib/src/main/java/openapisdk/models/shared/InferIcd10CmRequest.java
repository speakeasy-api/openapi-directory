package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InferIcd10CmRequest {
    @JsonProperty("Text")
    public String text;
    public InferIcd10CmRequest withText(String text) {
        this.text = text;
        return this;
    }
}