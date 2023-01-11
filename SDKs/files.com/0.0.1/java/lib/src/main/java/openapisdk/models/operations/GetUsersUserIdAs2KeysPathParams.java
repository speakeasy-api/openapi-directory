package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdAs2KeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public GetUsersUserIdAs2KeysPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}