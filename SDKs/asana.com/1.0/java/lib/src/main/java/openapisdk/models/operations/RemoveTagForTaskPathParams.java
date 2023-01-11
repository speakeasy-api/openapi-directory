package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public RemoveTagForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}