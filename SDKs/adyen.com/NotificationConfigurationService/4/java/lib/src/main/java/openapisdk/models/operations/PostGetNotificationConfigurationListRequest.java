package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetNotificationConfigurationListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetNotificationConfigurationListRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetNotificationConfigurationListSecurity security;
    public PostGetNotificationConfigurationListRequest withSecurity(PostGetNotificationConfigurationListSecurity security) {
        this.security = security;
        return this;
    }
}