package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVocabularyRequest {
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public DeleteVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}