package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetSessionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersGetSessionsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}