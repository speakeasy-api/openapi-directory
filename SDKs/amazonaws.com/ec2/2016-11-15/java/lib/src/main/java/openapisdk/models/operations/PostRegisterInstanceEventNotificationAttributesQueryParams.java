package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterInstanceEventNotificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRegisterInstanceEventNotificationAttributesActionEnum action;
    public PostRegisterInstanceEventNotificationAttributesQueryParams withAction(PostRegisterInstanceEventNotificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRegisterInstanceEventNotificationAttributesVersionEnum version;
    public PostRegisterInstanceEventNotificationAttributesQueryParams withVersion(PostRegisterInstanceEventNotificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}