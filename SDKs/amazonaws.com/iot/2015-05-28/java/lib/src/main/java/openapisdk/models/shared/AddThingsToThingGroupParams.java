package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddThingsToThingGroupParams
 * Parameters used when defining a mitigation action that move a set of things to a thing group.
**/
public class AddThingsToThingGroupParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideDynamicGroups")
    public Boolean overrideDynamicGroups;
    public AddThingsToThingGroupParams withOverrideDynamicGroups(Boolean overrideDynamicGroups) {
        this.overrideDynamicGroups = overrideDynamicGroups;
        return this;
    }
    @JsonProperty("thingGroupNames")
    public String[] thingGroupNames;
    public AddThingsToThingGroupParams withThingGroupNames(String[] thingGroupNames) {
        this.thingGroupNames = thingGroupNames;
        return this;
    }
}