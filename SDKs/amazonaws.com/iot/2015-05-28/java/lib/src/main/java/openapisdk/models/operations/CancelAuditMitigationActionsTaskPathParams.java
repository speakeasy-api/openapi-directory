package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelAuditMitigationActionsTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public CancelAuditMitigationActionsTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}