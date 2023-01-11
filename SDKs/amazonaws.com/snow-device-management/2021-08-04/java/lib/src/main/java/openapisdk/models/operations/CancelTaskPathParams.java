package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public CancelTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}