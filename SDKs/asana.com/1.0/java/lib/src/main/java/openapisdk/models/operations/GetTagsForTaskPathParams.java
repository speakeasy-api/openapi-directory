package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public GetTagsForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}