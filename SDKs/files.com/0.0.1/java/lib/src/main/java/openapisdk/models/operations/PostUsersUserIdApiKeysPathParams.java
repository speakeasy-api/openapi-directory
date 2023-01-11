package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdApiKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public PostUsersUserIdApiKeysPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}