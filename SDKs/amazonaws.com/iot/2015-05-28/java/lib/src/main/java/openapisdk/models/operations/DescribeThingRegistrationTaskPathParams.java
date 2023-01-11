package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeThingRegistrationTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public DescribeThingRegistrationTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}