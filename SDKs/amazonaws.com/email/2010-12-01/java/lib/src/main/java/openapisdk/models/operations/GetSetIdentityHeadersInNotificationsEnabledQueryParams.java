package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetIdentityHeadersInNotificationsEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetIdentityHeadersInNotificationsEnabledActionEnum action;
    public GetSetIdentityHeadersInNotificationsEnabledQueryParams withAction(GetSetIdentityHeadersInNotificationsEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Enabled")
    public Boolean enabled;
    public GetSetIdentityHeadersInNotificationsEnabledQueryParams withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetSetIdentityHeadersInNotificationsEnabledQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NotificationType")
    public GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum notificationType;
    public GetSetIdentityHeadersInNotificationsEnabledQueryParams withNotificationType(GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetIdentityHeadersInNotificationsEnabledVersionEnum version;
    public GetSetIdentityHeadersInNotificationsEnabledQueryParams withVersion(GetSetIdentityHeadersInNotificationsEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}