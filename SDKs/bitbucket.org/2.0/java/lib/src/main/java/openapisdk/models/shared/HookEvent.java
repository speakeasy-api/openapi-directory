package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HookEvent
 * An event, associated with a resource or subject type.
**/
public class HookEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public HookEvent withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public HookEvent withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public HookEventEventEnum event;
    public HookEvent withEvent(HookEventEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public HookEvent withLabel(String label) {
        this.label = label;
        return this;
    }
}