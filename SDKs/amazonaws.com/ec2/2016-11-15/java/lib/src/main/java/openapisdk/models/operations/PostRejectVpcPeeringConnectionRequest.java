package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectVpcPeeringConnectionRequest {
    public PostRejectVpcPeeringConnectionQueryParams queryParams;
    public PostRejectVpcPeeringConnectionRequest withQueryParams(PostRejectVpcPeeringConnectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRejectVpcPeeringConnectionHeaders headers;
    public PostRejectVpcPeeringConnectionRequest withHeaders(PostRejectVpcPeeringConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRejectVpcPeeringConnectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}