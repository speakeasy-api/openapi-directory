package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CallAnalyticsJobSettings
 * Provides optional settings for the <code>CallAnalyticsJob</code> operation. 
**/
public class CallAnalyticsJobSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentRedaction")
    public ContentRedaction contentRedaction;
    public CallAnalyticsJobSettings withContentRedaction(ContentRedaction contentRedaction) {
        this.contentRedaction = contentRedaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageModelName")
    public String languageModelName;
    public CallAnalyticsJobSettings withLanguageModelName(String languageModelName) {
        this.languageModelName = languageModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageOptions")
    public LanguageCodeEnum[] languageOptions;
    public CallAnalyticsJobSettings withLanguageOptions(LanguageCodeEnum[] languageOptions) {
        this.languageOptions = languageOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFilterMethod")
    public VocabularyFilterMethodEnum vocabularyFilterMethod;
    public CallAnalyticsJobSettings withVocabularyFilterMethod(VocabularyFilterMethodEnum vocabularyFilterMethod) {
        this.vocabularyFilterMethod = vocabularyFilterMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFilterName")
    public String vocabularyFilterName;
    public CallAnalyticsJobSettings withVocabularyFilterName(String vocabularyFilterName) {
        this.vocabularyFilterName = vocabularyFilterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public CallAnalyticsJobSettings withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}