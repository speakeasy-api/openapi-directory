package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNotificationConfigurationRequest {
    public PostDeleteNotificationConfigurationQueryParams queryParams;
    public PostDeleteNotificationConfigurationRequest withQueryParams(PostDeleteNotificationConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteNotificationConfigurationHeaders headers;
    public PostDeleteNotificationConfigurationRequest withHeaders(PostDeleteNotificationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteNotificationConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}