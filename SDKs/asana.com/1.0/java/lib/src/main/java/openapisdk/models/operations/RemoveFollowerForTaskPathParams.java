package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFollowerForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public RemoveFollowerForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}