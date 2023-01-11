package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveProjectForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public RemoveProjectForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}