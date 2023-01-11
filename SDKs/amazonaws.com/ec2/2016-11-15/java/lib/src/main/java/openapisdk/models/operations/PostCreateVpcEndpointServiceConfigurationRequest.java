package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcEndpointServiceConfigurationRequest {
    public PostCreateVpcEndpointServiceConfigurationQueryParams queryParams;
    public PostCreateVpcEndpointServiceConfigurationRequest withQueryParams(PostCreateVpcEndpointServiceConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpcEndpointServiceConfigurationHeaders headers;
    public PostCreateVpcEndpointServiceConfigurationRequest withHeaders(PostCreateVpcEndpointServiceConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpcEndpointServiceConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}