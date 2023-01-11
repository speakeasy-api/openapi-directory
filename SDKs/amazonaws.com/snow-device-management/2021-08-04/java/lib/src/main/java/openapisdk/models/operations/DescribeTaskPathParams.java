package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public DescribeTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}