package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public UploadFilePathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}