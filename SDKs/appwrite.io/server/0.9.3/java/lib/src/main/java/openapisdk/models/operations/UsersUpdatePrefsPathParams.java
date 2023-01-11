package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdatePrefsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersUpdatePrefsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}