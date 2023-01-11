package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDependentsForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public GetDependentsForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}