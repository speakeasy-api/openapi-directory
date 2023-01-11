package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionNumber")
    public Long executionNumber;
    public DeleteJobExecutionPathParams withExecutionNumber(Long executionNumber) {
        this.executionNumber = executionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public DeleteJobExecutionPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public DeleteJobExecutionPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}