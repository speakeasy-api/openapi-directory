package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDetectMitigationActionsTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public StartDetectMitigationActionsTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}