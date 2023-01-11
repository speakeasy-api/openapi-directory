package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateThingGroupsForThingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideDynamicGroups")
    public Boolean overrideDynamicGroups;
    public UpdateThingGroupsForThingRequestBody withOverrideDynamicGroups(Boolean overrideDynamicGroups) {
        this.overrideDynamicGroups = overrideDynamicGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupsToAdd")
    public String[] thingGroupsToAdd;
    public UpdateThingGroupsForThingRequestBody withThingGroupsToAdd(String[] thingGroupsToAdd) {
        this.thingGroupsToAdd = thingGroupsToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupsToRemove")
    public String[] thingGroupsToRemove;
    public UpdateThingGroupsForThingRequestBody withThingGroupsToRemove(String[] thingGroupsToRemove) {
        this.thingGroupsToRemove = thingGroupsToRemove;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public UpdateThingGroupsForThingRequestBody withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}