package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingRuntimeConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThingName")
    public String thingName;
    public UpdateThingRuntimeConfigurationPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}