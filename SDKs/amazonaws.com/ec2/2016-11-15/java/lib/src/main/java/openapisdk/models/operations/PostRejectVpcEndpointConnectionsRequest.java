package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectVpcEndpointConnectionsRequest {
    public PostRejectVpcEndpointConnectionsQueryParams queryParams;
    public PostRejectVpcEndpointConnectionsRequest withQueryParams(PostRejectVpcEndpointConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRejectVpcEndpointConnectionsHeaders headers;
    public PostRejectVpcEndpointConnectionsRequest withHeaders(PostRejectVpcEndpointConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRejectVpcEndpointConnectionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}