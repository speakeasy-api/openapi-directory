package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveDependenciesForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public RemoveDependenciesForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}