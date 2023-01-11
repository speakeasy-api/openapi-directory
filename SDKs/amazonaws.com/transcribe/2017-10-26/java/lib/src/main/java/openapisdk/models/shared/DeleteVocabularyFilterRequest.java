package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVocabularyFilterRequest {
    @JsonProperty("VocabularyFilterName")
    public String vocabularyFilterName;
    public DeleteVocabularyFilterRequest withVocabularyFilterName(String vocabularyFilterName) {
        this.vocabularyFilterName = vocabularyFilterName;
        return this;
    }
}