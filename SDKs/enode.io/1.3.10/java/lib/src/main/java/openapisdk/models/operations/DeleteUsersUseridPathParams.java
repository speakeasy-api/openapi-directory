package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsersUseridPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteUsersUseridPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}