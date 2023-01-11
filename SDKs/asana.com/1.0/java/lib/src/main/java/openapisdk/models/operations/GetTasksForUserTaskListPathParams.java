package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTasksForUserTaskListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_task_list_gid")
    public String userTaskListGid;
    public GetTasksForUserTaskListPathParams withUserTaskListGid(String userTaskListGid) {
        this.userTaskListGid = userTaskListGid;
        return this;
    }
}