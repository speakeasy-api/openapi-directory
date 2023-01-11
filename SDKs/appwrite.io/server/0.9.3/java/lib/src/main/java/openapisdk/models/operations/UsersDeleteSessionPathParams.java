package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeleteSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public UsersDeleteSessionPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersDeleteSessionPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}