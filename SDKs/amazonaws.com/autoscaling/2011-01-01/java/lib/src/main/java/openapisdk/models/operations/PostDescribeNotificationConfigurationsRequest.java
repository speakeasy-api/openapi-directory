package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNotificationConfigurationsRequest {
    public PostDescribeNotificationConfigurationsQueryParams queryParams;
    public PostDescribeNotificationConfigurationsRequest withQueryParams(PostDescribeNotificationConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNotificationConfigurationsHeaders headers;
    public PostDescribeNotificationConfigurationsRequest withHeaders(PostDescribeNotificationConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNotificationConfigurationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}