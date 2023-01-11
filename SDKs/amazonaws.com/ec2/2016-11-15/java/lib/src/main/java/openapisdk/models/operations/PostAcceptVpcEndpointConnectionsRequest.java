package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptVpcEndpointConnectionsRequest {
    public PostAcceptVpcEndpointConnectionsQueryParams queryParams;
    public PostAcceptVpcEndpointConnectionsRequest withQueryParams(PostAcceptVpcEndpointConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAcceptVpcEndpointConnectionsHeaders headers;
    public PostAcceptVpcEndpointConnectionsRequest withHeaders(PostAcceptVpcEndpointConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAcceptVpcEndpointConnectionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}