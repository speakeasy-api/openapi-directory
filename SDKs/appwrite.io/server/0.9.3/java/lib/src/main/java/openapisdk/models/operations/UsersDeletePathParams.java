package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}