package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingRegistrationTaskReportsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public ListThingRegistrationTaskReportsPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}