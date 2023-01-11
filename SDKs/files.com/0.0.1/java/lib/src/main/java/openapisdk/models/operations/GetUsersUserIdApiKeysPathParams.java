package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdApiKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public GetUsersUserIdApiKeysPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}