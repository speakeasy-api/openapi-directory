package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserUserIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}