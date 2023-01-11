package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachThingPrincipalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public AttachThingPrincipalPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}