package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectivityInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThingName")
    public String thingName;
    public GetConnectivityInfoPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}