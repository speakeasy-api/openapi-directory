package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutNotificationConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutNotificationConfigurationActionEnum action;
    public PostPutNotificationConfigurationQueryParams withAction(PostPutNotificationConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutNotificationConfigurationVersionEnum version;
    public PostPutNotificationConfigurationQueryParams withVersion(PostPutNotificationConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}