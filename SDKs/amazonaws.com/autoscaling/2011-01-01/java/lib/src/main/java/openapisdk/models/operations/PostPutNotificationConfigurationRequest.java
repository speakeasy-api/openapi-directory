package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutNotificationConfigurationRequest {
    public PostPutNotificationConfigurationQueryParams queryParams;
    public PostPutNotificationConfigurationRequest withQueryParams(PostPutNotificationConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutNotificationConfigurationHeaders headers;
    public PostPutNotificationConfigurationRequest withHeaders(PostPutNotificationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutNotificationConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}