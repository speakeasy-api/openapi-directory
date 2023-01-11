package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVocabularyFilterRequest {
    @JsonProperty("VocabularyFilterName")
    public String vocabularyFilterName;
    public GetVocabularyFilterRequest withVocabularyFilterName(String vocabularyFilterName) {
        this.vocabularyFilterName = vocabularyFilterName;
        return this;
    }
}