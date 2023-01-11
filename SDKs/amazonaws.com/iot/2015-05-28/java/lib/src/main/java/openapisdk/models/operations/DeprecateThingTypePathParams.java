package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeprecateThingTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingTypeName")
    public String thingTypeName;
    public DeprecateThingTypePathParams withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}