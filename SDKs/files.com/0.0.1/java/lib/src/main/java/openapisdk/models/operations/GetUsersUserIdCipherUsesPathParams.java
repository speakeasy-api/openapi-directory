package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdCipherUsesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public GetUsersUserIdCipherUsesPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}