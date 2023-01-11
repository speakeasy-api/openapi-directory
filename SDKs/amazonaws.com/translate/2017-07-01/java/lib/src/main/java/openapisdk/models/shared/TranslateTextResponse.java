package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslateTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppliedTerminologies")
    public AppliedTerminology[] appliedTerminologies;
    public TranslateTextResponse withAppliedTerminologies(AppliedTerminology[] appliedTerminologies) {
        this.appliedTerminologies = appliedTerminologies;
        return this;
    }
    @JsonProperty("SourceLanguageCode")
    public String sourceLanguageCode;
    public TranslateTextResponse withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonProperty("TargetLanguageCode")
    public String targetLanguageCode;
    public TranslateTextResponse withTargetLanguageCode(String targetLanguageCode) {
        this.targetLanguageCode = targetLanguageCode;
        return this;
    }
    @JsonProperty("TranslatedText")
    public String translatedText;
    public TranslateTextResponse withTranslatedText(String translatedText) {
        this.translatedText = translatedText;
        return this;
    }
}