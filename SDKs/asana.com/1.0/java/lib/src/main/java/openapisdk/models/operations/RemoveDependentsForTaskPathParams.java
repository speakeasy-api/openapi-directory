package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveDependentsForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public RemoveDependentsForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}