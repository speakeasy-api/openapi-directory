package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdPublicKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public PostUsersUserIdPublicKeysPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}