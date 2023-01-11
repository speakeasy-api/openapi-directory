package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDynamicThingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingGroupName")
    public String thingGroupName;
    public DeleteDynamicThingGroupPathParams withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}