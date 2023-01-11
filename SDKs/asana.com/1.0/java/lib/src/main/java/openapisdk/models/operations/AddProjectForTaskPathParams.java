package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddProjectForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public AddProjectForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}