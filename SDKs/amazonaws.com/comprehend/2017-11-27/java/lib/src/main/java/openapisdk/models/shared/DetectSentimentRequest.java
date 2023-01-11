package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectSentimentRequest {
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public DetectSentimentRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public DetectSentimentRequest withText(String text) {
        this.text = text;
        return this;
    }
}