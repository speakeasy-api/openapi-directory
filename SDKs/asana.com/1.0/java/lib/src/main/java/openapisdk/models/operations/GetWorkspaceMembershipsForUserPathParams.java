package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceMembershipsForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_gid")
    public String userGid;
    public GetWorkspaceMembershipsForUserPathParams withUserGid(String userGid) {
        this.userGid = userGid;
        return this;
    }
}