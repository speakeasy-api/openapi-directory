package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LanguageList
 * Languages List
**/
public class LanguageList {
    @JsonProperty("languages")
    public Language[] languages;
    public LanguageList withLanguages(Language[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public LanguageList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}