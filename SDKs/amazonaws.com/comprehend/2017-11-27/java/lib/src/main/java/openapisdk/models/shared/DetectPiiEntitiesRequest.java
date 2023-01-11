package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectPiiEntitiesRequest {
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public DetectPiiEntitiesRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public DetectPiiEntitiesRequest withText(String text) {
        this.text = text;
        return this;
    }
}