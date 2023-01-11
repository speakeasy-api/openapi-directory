package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserTaskListForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_gid")
    public String userGid;
    public GetUserTaskListForUserPathParams withUserGid(String userGid) {
        this.userGid = userGid;
        return this;
    }
}