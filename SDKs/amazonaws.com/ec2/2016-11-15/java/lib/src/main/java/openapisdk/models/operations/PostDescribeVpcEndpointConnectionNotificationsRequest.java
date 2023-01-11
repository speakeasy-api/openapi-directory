package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointConnectionNotificationsRequest {
    public PostDescribeVpcEndpointConnectionNotificationsQueryParams queryParams;
    public PostDescribeVpcEndpointConnectionNotificationsRequest withQueryParams(PostDescribeVpcEndpointConnectionNotificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcEndpointConnectionNotificationsHeaders headers;
    public PostDescribeVpcEndpointConnectionNotificationsRequest withHeaders(PostDescribeVpcEndpointConnectionNotificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcEndpointConnectionNotificationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}