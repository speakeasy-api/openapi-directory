package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAuditMitigationActionsTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public DescribeAuditMitigationActionsTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}