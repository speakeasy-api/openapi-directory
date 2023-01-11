package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DuplicateTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public DuplicateTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}