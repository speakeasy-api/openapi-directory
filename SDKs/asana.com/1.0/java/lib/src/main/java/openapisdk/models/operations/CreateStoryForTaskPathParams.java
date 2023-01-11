package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStoryForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public CreateStoryForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}