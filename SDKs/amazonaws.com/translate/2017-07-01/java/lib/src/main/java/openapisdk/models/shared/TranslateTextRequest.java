package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslateTextRequest {
    @JsonProperty("SourceLanguageCode")
    public String sourceLanguageCode;
    public TranslateTextRequest withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonProperty("TargetLanguageCode")
    public String targetLanguageCode;
    public TranslateTextRequest withTargetLanguageCode(String targetLanguageCode) {
        this.targetLanguageCode = targetLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminologyNames")
    public String[] terminologyNames;
    public TranslateTextRequest withTerminologyNames(String[] terminologyNames) {
        this.terminologyNames = terminologyNames;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public TranslateTextRequest withText(String text) {
        this.text = text;
        return this;
    }
}