package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectDominantLanguageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Languages")
    public DominantLanguage[] languages;
    public DetectDominantLanguageResponse withLanguages(DominantLanguage[] languages) {
        this.languages = languages;
        return this;
    }
}