package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopThingRegistrationTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public StopThingRegistrationTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}