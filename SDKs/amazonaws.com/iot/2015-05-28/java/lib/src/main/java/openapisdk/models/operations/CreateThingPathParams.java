package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateThingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public CreateThingPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}