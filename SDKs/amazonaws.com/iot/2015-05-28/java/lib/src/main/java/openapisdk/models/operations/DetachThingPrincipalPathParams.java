package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachThingPrincipalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public DetachThingPrincipalPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}