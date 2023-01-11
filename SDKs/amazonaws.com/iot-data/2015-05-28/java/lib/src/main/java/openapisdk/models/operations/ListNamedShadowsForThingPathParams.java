package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNamedShadowsForThingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public ListNamedShadowsForThingPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}