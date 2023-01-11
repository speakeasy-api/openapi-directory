package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingGroupName")
    public String thingGroupName;
    public DeleteThingGroupPathParams withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}