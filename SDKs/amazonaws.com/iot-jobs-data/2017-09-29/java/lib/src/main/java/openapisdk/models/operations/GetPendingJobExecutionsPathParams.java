package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPendingJobExecutionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public GetPendingJobExecutionsPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}