package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcPeeringConnectionOptionsRequest {
    public PostModifyVpcPeeringConnectionOptionsQueryParams queryParams;
    public PostModifyVpcPeeringConnectionOptionsRequest withQueryParams(PostModifyVpcPeeringConnectionOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpcPeeringConnectionOptionsHeaders headers;
    public PostModifyVpcPeeringConnectionOptionsRequest withHeaders(PostModifyVpcPeeringConnectionOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpcPeeringConnectionOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}