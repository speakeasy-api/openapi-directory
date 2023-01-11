package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAttachmentForTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_gid")
    public String taskGid;
    public CreateAttachmentForTaskPathParams withTaskGid(String taskGid) {
        this.taskGid = taskGid;
        return this;
    }
}