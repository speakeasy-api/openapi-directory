package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateThingGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupArn")
    public String thingGroupArn;
    public CreateThingGroupResponse withThingGroupArn(String thingGroupArn) {
        this.thingGroupArn = thingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupId")
    public String thingGroupId;
    public CreateThingGroupResponse withThingGroupId(String thingGroupId) {
        this.thingGroupId = thingGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupName")
    public String thingGroupName;
    public CreateThingGroupResponse withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}