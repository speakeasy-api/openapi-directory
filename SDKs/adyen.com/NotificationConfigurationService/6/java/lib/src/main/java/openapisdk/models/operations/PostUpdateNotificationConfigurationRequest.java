package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateNotificationConfigurationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostUpdateNotificationConfigurationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostUpdateNotificationConfigurationSecurity security;
    public PostUpdateNotificationConfigurationRequest withSecurity(PostUpdateNotificationConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}