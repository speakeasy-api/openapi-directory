package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public CancelJobExecutionPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public CancelJobExecutionPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}