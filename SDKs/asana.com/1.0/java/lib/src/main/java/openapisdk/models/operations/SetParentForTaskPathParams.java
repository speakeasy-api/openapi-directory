package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetParentForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public SetParentForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}