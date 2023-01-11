package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTestNotificationConfigurationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostTestNotificationConfigurationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostTestNotificationConfigurationSecurity security;
    public PostTestNotificationConfigurationRequest withSecurity(PostTestNotificationConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}