package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVocabularyRequest {
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public UpdateVocabularyRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phrases")
    public String[] phrases;
    public UpdateVocabularyRequest withPhrases(String[] phrases) {
        this.phrases = phrases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFileUri")
    public String vocabularyFileUri;
    public UpdateVocabularyRequest withVocabularyFileUri(String vocabularyFileUri) {
        this.vocabularyFileUri = vocabularyFileUri;
        return this;
    }
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public UpdateVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}