package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFollowersForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public AddFollowersForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}