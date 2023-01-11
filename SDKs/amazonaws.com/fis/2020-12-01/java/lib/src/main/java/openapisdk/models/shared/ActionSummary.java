package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionSummary
 * Provides a summary of an action.
**/
public class ActionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ActionSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ActionSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ActionSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public java.util.Map<String, ActionTarget> targets;
    public ActionSummary withTargets(java.util.Map<String, ActionTarget> targets) {
        this.targets = targets;
        return this;
    }
}