package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVocabularyRequest {
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public GetVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}