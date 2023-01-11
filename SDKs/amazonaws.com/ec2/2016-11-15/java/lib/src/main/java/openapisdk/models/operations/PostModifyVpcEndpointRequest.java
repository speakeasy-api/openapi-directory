package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcEndpointRequest {
    public PostModifyVpcEndpointQueryParams queryParams;
    public PostModifyVpcEndpointRequest withQueryParams(PostModifyVpcEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpcEndpointHeaders headers;
    public PostModifyVpcEndpointRequest withHeaders(PostModifyVpcEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpcEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}