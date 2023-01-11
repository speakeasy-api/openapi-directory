package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DominantLanguage
 * Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
**/
public class DominantLanguage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public String languageCode;
    public DominantLanguage withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public DominantLanguage withScore(Float score) {
        this.score = score;
        return this;
    }
}