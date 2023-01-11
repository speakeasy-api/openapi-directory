package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityNotificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetIdentityNotificationAttributesActionEnum action;
    public PostGetIdentityNotificationAttributesQueryParams withAction(PostGetIdentityNotificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetIdentityNotificationAttributesVersionEnum version;
    public PostGetIdentityNotificationAttributesQueryParams withVersion(PostGetIdentityNotificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}