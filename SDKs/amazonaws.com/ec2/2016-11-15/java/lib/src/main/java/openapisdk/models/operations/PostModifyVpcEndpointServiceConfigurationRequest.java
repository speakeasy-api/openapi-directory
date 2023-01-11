package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcEndpointServiceConfigurationRequest {
    public PostModifyVpcEndpointServiceConfigurationQueryParams queryParams;
    public PostModifyVpcEndpointServiceConfigurationRequest withQueryParams(PostModifyVpcEndpointServiceConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpcEndpointServiceConfigurationHeaders headers;
    public PostModifyVpcEndpointServiceConfigurationRequest withHeaders(PostModifyVpcEndpointServiceConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpcEndpointServiceConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}