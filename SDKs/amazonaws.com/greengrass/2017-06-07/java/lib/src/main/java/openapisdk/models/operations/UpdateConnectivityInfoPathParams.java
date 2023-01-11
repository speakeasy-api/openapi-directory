package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectivityInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThingName")
    public String thingName;
    public UpdateConnectivityInfoPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}