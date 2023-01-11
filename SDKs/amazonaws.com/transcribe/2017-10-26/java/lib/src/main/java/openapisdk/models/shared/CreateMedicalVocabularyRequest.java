package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMedicalVocabularyRequest {
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public CreateMedicalVocabularyRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateMedicalVocabularyRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("VocabularyFileUri")
    public String vocabularyFileUri;
    public CreateMedicalVocabularyRequest withVocabularyFileUri(String vocabularyFileUri) {
        this.vocabularyFileUri = vocabularyFileUri;
        return this;
    }
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public CreateMedicalVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}