package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDetectDominantLanguageItemResult
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
public class BatchDetectDominantLanguageItemResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Index")
    public Long index;
    public BatchDetectDominantLanguageItemResult withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Languages")
    public DominantLanguage[] languages;
    public BatchDetectDominantLanguageItemResult withLanguages(DominantLanguage[] languages) {
        this.languages = languages;
        return this;
    }
}