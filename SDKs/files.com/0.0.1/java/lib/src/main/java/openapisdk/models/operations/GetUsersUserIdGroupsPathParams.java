package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public GetUsersUserIdGroupsPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}