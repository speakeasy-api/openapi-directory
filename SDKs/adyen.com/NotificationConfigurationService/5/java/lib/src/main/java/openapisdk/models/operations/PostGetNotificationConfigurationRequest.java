package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetNotificationConfigurationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetNotificationConfigurationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetNotificationConfigurationSecurity security;
    public PostGetNotificationConfigurationRequest withSecurity(PostGetNotificationConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}