package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public AddTagForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}