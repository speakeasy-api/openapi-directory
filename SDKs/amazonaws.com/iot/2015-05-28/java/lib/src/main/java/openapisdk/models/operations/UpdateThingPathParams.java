package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public UpdateThingPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}