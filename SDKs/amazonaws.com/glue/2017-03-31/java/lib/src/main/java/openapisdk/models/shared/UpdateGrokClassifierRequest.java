package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGrokClassifierRequest
 * Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.
**/
public class UpdateGrokClassifierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classification")
    public String classification;
    public UpdateGrokClassifierRequest withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomPatterns")
    public String customPatterns;
    public UpdateGrokClassifierRequest withCustomPatterns(String customPatterns) {
        this.customPatterns = customPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrokPattern")
    public String grokPattern;
    public UpdateGrokClassifierRequest withGrokPattern(String grokPattern) {
        this.grokPattern = grokPattern;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateGrokClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
}