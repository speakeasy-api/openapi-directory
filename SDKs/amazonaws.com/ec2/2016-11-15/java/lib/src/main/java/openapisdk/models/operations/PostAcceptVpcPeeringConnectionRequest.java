package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptVpcPeeringConnectionRequest {
    public PostAcceptVpcPeeringConnectionQueryParams queryParams;
    public PostAcceptVpcPeeringConnectionRequest withQueryParams(PostAcceptVpcPeeringConnectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAcceptVpcPeeringConnectionHeaders headers;
    public PostAcceptVpcPeeringConnectionRequest withHeaders(PostAcceptVpcPeeringConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAcceptVpcPeeringConnectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}