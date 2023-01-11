package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateThingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingGroupName")
    public String thingGroupName;
    public CreateThingGroupPathParams withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}