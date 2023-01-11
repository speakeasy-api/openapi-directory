package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDependenciesForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public AddDependenciesForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}