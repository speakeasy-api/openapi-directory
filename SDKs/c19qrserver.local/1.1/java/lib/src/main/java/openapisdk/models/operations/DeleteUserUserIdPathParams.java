package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public DeleteUserUserIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}