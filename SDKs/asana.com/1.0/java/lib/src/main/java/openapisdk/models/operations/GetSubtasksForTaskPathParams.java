package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubtasksForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public GetSubtasksForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}