package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserTaskListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_task_list_gid")
    public String userTaskListGid;
    public GetUserTaskListPathParams withUserTaskListGid(String userTaskListGid) {
        this.userTaskListGid = userTaskListGid;
        return this;
    }
}