package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartAuditMitigationActionsTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public StartAuditMitigationActionsTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}