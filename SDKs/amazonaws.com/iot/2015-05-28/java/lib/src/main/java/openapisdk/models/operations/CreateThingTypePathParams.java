package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateThingTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingTypeName")
    public String thingTypeName;
    public CreateThingTypePathParams withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}