package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveThingFromThingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public RemoveThingFromThingGroupRequestBody withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupArn")
    public String thingGroupArn;
    public RemoveThingFromThingGroupRequestBody withThingGroupArn(String thingGroupArn) {
        this.thingGroupArn = thingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupName")
    public String thingGroupName;
    public RemoveThingFromThingGroupRequestBody withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public RemoveThingFromThingGroupRequestBody withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}