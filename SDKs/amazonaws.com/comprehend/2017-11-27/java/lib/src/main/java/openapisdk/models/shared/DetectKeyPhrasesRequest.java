package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectKeyPhrasesRequest {
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public DetectKeyPhrasesRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public DetectKeyPhrasesRequest withText(String text) {
        this.text = text;
        return this;
    }
}