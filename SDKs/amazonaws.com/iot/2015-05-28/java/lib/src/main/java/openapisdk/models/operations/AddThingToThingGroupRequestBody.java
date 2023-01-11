package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddThingToThingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideDynamicGroups")
    public Boolean overrideDynamicGroups;
    public AddThingToThingGroupRequestBody withOverrideDynamicGroups(Boolean overrideDynamicGroups) {
        this.overrideDynamicGroups = overrideDynamicGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public AddThingToThingGroupRequestBody withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupArn")
    public String thingGroupArn;
    public AddThingToThingGroupRequestBody withThingGroupArn(String thingGroupArn) {
        this.thingGroupArn = thingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupName")
    public String thingGroupName;
    public AddThingToThingGroupRequestBody withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public AddThingToThingGroupRequestBody withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}