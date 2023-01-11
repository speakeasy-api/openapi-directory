package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Term
 * The term being translated by the custom terminology.
**/
public class Term {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceText")
    public String sourceText;
    public Term withSourceText(String sourceText) {
        this.sourceText = sourceText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetText")
    public String targetText;
    public Term withTargetText(String targetText) {
        this.targetText = targetText;
        return this;
    }
}