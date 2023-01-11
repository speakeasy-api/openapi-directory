package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThingRuntimeConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThingName")
    public String thingName;
    public GetThingRuntimeConfigurationPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}