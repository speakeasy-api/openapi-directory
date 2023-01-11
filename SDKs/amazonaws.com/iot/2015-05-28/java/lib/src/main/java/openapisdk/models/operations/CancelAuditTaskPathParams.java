package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelAuditTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public CancelAuditTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}