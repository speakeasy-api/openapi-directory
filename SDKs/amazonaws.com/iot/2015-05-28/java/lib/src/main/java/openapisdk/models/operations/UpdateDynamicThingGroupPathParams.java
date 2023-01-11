package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDynamicThingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingGroupName")
    public String thingGroupName;
    public UpdateDynamicThingGroupPathParams withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}