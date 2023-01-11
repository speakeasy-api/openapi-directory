package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInputFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetInputFilePathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}