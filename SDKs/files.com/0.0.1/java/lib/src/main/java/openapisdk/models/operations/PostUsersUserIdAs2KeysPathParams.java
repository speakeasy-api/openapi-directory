package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdAs2KeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public PostUsersUserIdAs2KeysPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}