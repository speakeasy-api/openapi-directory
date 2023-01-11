package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMedicalVocabularyRequest {
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public UpdateMedicalVocabularyRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFileUri")
    public String vocabularyFileUri;
    public UpdateMedicalVocabularyRequest withVocabularyFileUri(String vocabularyFileUri) {
        this.vocabularyFileUri = vocabularyFileUri;
        return this;
    }
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public UpdateMedicalVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}