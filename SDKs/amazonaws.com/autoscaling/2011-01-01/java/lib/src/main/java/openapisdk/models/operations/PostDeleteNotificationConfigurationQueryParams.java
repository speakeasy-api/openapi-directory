package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNotificationConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNotificationConfigurationActionEnum action;
    public PostDeleteNotificationConfigurationQueryParams withAction(PostDeleteNotificationConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNotificationConfigurationVersionEnum version;
    public PostDeleteNotificationConfigurationQueryParams withVersion(PostDeleteNotificationConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}