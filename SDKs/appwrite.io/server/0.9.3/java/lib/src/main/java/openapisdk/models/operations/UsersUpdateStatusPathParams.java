package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersUpdateStatusPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}