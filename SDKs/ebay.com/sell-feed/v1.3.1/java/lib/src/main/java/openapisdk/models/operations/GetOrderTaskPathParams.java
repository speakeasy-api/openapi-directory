package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetOrderTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}