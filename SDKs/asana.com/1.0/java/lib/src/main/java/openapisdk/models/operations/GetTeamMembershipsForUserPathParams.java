package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMembershipsForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_gid")
    public String userGid;
    public GetTeamMembershipsForUserPathParams withUserGid(String userGid) {
        this.userGid = userGid;
        return this;
    }
}