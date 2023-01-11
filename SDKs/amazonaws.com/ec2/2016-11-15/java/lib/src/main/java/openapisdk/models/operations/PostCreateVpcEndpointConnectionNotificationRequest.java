package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcEndpointConnectionNotificationRequest {
    public PostCreateVpcEndpointConnectionNotificationQueryParams queryParams;
    public PostCreateVpcEndpointConnectionNotificationRequest withQueryParams(PostCreateVpcEndpointConnectionNotificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpcEndpointConnectionNotificationHeaders headers;
    public PostCreateVpcEndpointConnectionNotificationRequest withHeaders(PostCreateVpcEndpointConnectionNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpcEndpointConnectionNotificationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}