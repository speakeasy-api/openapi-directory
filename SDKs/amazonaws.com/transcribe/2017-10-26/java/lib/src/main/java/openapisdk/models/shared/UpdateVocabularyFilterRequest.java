package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVocabularyFilterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFilterFileUri")
    public String vocabularyFilterFileUri;
    public UpdateVocabularyFilterRequest withVocabularyFilterFileUri(String vocabularyFilterFileUri) {
        this.vocabularyFilterFileUri = vocabularyFilterFileUri;
        return this;
    }
    @JsonProperty("VocabularyFilterName")
    public String vocabularyFilterName;
    public UpdateVocabularyFilterRequest withVocabularyFilterName(String vocabularyFilterName) {
        this.vocabularyFilterName = vocabularyFilterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Words")
    public String[] words;
    public UpdateVocabularyFilterRequest withWords(String[] words) {
        this.words = words;
        return this;
    }
}