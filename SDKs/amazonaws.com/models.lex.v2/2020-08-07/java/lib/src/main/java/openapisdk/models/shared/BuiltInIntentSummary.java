package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuiltInIntentSummary
 * Provides summary information about a built-in intent for the <a>ListBuiltInIntents</a> operation.
**/
public class BuiltInIntentSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BuiltInIntentSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentSignature")
    public String intentSignature;
    public BuiltInIntentSummary withIntentSignature(String intentSignature) {
        this.intentSignature = intentSignature;
        return this;
    }
}