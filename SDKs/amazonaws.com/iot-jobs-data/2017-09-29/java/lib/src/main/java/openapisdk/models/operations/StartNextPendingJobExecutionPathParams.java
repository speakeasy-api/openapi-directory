package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartNextPendingJobExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public StartNextPendingJobExecutionPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}