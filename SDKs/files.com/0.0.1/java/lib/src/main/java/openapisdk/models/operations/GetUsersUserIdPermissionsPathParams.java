package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public GetUsersUserIdPermissionsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}