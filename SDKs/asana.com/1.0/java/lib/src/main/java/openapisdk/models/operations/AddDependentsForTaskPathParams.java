package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDependentsForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public AddDependentsForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}