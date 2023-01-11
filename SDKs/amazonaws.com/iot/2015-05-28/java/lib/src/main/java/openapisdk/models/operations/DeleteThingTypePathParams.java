package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThingTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingTypeName")
    public String thingTypeName;
    public DeleteThingTypePathParams withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}