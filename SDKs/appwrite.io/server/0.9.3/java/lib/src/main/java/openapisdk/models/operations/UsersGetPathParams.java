package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}