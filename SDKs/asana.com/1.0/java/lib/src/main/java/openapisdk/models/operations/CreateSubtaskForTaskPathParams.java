package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubtaskForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public CreateSubtaskForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}