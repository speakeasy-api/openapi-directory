package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResultFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetResultFilePathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}