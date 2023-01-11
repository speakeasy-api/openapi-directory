package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterInstanceEventNotificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeregisterInstanceEventNotificationAttributesActionEnum action;
    public PostDeregisterInstanceEventNotificationAttributesQueryParams withAction(PostDeregisterInstanceEventNotificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeregisterInstanceEventNotificationAttributesVersionEnum version;
    public PostDeregisterInstanceEventNotificationAttributesQueryParams withVersion(PostDeregisterInstanceEventNotificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}