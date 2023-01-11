package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFavoritesForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_gid")
    public String userGid;
    public GetFavoritesForUserPathParams withUserGid(String userGid) {
        this.userGid = userGid;
        return this;
    }
}