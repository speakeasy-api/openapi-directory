package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectSyntaxRequest {
    @JsonProperty("LanguageCode")
    public SyntaxLanguageCodeEnum languageCode;
    public DetectSyntaxRequest withLanguageCode(SyntaxLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public DetectSyntaxRequest withText(String text) {
        this.text = text;
        return this;
    }
}