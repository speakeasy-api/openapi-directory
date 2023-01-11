package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDynamicThingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingGroupName")
    public String thingGroupName;
    public CreateDynamicThingGroupPathParams withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}