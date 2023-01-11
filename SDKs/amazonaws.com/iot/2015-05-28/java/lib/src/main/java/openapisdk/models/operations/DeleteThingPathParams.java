package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public DeleteThingPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}