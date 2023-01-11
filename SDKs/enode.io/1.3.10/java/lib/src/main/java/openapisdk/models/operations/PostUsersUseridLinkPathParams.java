package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUseridLinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PostUsersUseridLinkPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}