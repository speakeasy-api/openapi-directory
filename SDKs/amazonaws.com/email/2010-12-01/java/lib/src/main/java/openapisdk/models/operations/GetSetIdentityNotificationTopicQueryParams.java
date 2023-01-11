package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetIdentityNotificationTopicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetIdentityNotificationTopicActionEnum action;
    public GetSetIdentityNotificationTopicQueryParams withAction(GetSetIdentityNotificationTopicActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetSetIdentityNotificationTopicQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NotificationType")
    public GetSetIdentityNotificationTopicNotificationTypeEnum notificationType;
    public GetSetIdentityNotificationTopicQueryParams withNotificationType(GetSetIdentityNotificationTopicNotificationTypeEnum notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnsTopic")
    public String snsTopic;
    public GetSetIdentityNotificationTopicQueryParams withSnsTopic(String snsTopic) {
        this.snsTopic = snsTopic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetIdentityNotificationTopicVersionEnum version;
    public GetSetIdentityNotificationTopicQueryParams withVersion(GetSetIdentityNotificationTopicVersionEnum version) {
        this.version = version;
        return this;
    }
}