package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMedicalVocabularyRequest {
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public GetMedicalVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}