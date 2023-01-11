package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoriesForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public GetStoriesForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}