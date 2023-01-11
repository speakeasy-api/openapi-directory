package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDependenciesForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public GetDependenciesForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}