package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityNotificationTopicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetIdentityNotificationTopicActionEnum action;
    public PostSetIdentityNotificationTopicQueryParams withAction(PostSetIdentityNotificationTopicActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetIdentityNotificationTopicVersionEnum version;
    public PostSetIdentityNotificationTopicQueryParams withVersion(PostSetIdentityNotificationTopicVersionEnum version) {
        this.version = version;
        return this;
    }
}