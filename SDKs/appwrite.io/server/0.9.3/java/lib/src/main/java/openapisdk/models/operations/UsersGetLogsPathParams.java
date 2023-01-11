package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersGetLogsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}