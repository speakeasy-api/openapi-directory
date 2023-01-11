package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleViolationCause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public String context;
    public RuleViolationCause withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RuleViolationCause withDescription(String description) {
        this.description = description;
        return this;
    }
}