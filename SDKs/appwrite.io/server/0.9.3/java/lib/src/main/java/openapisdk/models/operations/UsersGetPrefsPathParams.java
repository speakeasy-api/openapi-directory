package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetPrefsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersGetPrefsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}