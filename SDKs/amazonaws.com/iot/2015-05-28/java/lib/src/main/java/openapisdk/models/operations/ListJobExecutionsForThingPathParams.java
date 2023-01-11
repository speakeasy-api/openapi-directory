package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobExecutionsForThingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public ListJobExecutionsForThingPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}