package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomerServiceMetricTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetCustomerServiceMetricTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}