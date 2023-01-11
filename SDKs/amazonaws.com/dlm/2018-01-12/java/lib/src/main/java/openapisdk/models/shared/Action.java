package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Action
 * Specifies an action for an event-based policy.
**/
public class Action {
    @JsonProperty("CrossRegionCopy")
    public CrossRegionCopyAction[] crossRegionCopy;
    public Action withCrossRegionCopy(CrossRegionCopyAction[] crossRegionCopy) {
        this.crossRegionCopy = crossRegionCopy;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Action withName(String name) {
        this.name = name;
        return this;
    }
}