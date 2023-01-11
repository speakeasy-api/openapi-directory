package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_gid")
    public String userGid;
    public GetTeamsForUserPathParams withUserGid(String userGid) {
        this.userGid = userGid;
        return this;
    }
}