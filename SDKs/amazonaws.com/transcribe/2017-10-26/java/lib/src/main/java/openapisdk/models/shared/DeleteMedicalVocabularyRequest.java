package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMedicalVocabularyRequest {
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public DeleteMedicalVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}