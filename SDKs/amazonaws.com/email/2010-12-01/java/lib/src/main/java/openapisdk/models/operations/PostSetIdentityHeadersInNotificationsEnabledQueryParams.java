package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityHeadersInNotificationsEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetIdentityHeadersInNotificationsEnabledActionEnum action;
    public PostSetIdentityHeadersInNotificationsEnabledQueryParams withAction(PostSetIdentityHeadersInNotificationsEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetIdentityHeadersInNotificationsEnabledVersionEnum version;
    public PostSetIdentityHeadersInNotificationsEnabledQueryParams withVersion(PostSetIdentityHeadersInNotificationsEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}