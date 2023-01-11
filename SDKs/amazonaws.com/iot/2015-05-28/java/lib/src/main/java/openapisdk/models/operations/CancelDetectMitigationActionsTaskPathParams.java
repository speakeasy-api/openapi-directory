package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelDetectMitigationActionsTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public CancelDetectMitigationActionsTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}