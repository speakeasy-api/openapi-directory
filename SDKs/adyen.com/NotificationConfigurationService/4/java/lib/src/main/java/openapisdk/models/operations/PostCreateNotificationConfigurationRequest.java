package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNotificationConfigurationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCreateNotificationConfigurationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCreateNotificationConfigurationSecurity security;
    public PostCreateNotificationConfigurationRequest withSecurity(PostCreateNotificationConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}