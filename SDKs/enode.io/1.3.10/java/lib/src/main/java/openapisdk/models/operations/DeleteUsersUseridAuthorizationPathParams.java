package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsersUseridAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteUsersUseridAuthorizationPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}