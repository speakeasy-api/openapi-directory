package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingShadowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public UpdateThingShadowPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}