package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNotificationConfigurationsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDeleteNotificationConfigurationsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDeleteNotificationConfigurationsSecurity security;
    public PostDeleteNotificationConfigurationsRequest withSecurity(PostDeleteNotificationConfigurationsSecurity security) {
        this.security = security;
        return this;
    }
}