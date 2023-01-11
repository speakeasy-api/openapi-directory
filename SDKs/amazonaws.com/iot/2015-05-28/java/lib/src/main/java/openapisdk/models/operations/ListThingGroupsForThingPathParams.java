package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingGroupsForThingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public ListThingGroupsForThingPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}