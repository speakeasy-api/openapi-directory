package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDetectMitigationActionsTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public DescribeDetectMitigationActionsTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}