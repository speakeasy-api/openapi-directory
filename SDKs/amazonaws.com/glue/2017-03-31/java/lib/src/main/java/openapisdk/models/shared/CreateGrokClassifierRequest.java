package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGrokClassifierRequest
 * Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
**/
public class CreateGrokClassifierRequest {
    @JsonProperty("Classification")
    public String classification;
    public CreateGrokClassifierRequest withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomPatterns")
    public String customPatterns;
    public CreateGrokClassifierRequest withCustomPatterns(String customPatterns) {
        this.customPatterns = customPatterns;
        return this;
    }
    @JsonProperty("GrokPattern")
    public String grokPattern;
    public CreateGrokClassifierRequest withGrokPattern(String grokPattern) {
        this.grokPattern = grokPattern;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateGrokClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
}