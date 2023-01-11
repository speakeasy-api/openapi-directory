package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_gid")
    public String userGid;
    public GetUserPathParams withUserGid(String userGid) {
        this.userGid = userGid;
        return this;
    }
}