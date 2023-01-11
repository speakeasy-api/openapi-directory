package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateVerificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UsersUpdateVerificationPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}