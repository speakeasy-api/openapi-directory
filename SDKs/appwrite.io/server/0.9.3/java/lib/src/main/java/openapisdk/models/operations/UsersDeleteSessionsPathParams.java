package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeleteSessionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersDeleteSessionsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}