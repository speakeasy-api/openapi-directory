package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public UpdateTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}