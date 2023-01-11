package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedDeviceId")
    public String managedDeviceId;
    public DescribeExecutionPathParams withManagedDeviceId(String managedDeviceId) {
        this.managedDeviceId = managedDeviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public DescribeExecutionPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}