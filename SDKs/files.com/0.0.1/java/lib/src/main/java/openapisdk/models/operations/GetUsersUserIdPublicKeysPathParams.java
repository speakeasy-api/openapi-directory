package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdPublicKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public GetUsersUserIdPublicKeysPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}