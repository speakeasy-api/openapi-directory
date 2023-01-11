package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingsInThingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingGroupName")
    public String thingGroupName;
    public ListThingsInThingGroupPathParams withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}