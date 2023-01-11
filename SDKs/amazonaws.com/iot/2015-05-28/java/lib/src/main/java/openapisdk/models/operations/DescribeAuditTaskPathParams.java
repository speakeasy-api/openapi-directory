package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAuditTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public DescribeAuditTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}