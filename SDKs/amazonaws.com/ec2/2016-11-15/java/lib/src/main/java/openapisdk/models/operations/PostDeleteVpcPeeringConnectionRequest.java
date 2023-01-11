package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcPeeringConnectionRequest {
    public PostDeleteVpcPeeringConnectionQueryParams queryParams;
    public PostDeleteVpcPeeringConnectionRequest withQueryParams(PostDeleteVpcPeeringConnectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVpcPeeringConnectionHeaders headers;
    public PostDeleteVpcPeeringConnectionRequest withHeaders(PostDeleteVpcPeeringConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVpcPeeringConnectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}