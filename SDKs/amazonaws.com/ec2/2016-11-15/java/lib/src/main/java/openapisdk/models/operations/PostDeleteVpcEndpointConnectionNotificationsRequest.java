package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcEndpointConnectionNotificationsRequest {
    public PostDeleteVpcEndpointConnectionNotificationsQueryParams queryParams;
    public PostDeleteVpcEndpointConnectionNotificationsRequest withQueryParams(PostDeleteVpcEndpointConnectionNotificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVpcEndpointConnectionNotificationsHeaders headers;
    public PostDeleteVpcEndpointConnectionNotificationsRequest withHeaders(PostDeleteVpcEndpointConnectionNotificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVpcEndpointConnectionNotificationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}