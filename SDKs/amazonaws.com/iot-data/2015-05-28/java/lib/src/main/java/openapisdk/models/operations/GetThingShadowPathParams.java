package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThingShadowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public GetThingShadowPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}