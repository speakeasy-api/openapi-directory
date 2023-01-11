package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcPeeringConnectionRequest {
    public PostCreateVpcPeeringConnectionQueryParams queryParams;
    public PostCreateVpcPeeringConnectionRequest withQueryParams(PostCreateVpcPeeringConnectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpcPeeringConnectionHeaders headers;
    public PostCreateVpcPeeringConnectionRequest withHeaders(PostCreateVpcPeeringConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpcPeeringConnectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}