package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingPrincipalsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public ListThingPrincipalsPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}