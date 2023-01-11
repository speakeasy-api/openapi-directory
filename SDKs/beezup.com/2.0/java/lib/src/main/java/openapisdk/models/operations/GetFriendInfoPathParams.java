package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFriendInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public GetFriendInfoPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}