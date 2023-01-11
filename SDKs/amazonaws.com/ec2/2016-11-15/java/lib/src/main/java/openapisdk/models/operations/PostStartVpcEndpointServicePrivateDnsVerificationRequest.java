package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartVpcEndpointServicePrivateDnsVerificationRequest {
    public PostStartVpcEndpointServicePrivateDnsVerificationQueryParams queryParams;
    public PostStartVpcEndpointServicePrivateDnsVerificationRequest withQueryParams(PostStartVpcEndpointServicePrivateDnsVerificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartVpcEndpointServicePrivateDnsVerificationHeaders headers;
    public PostStartVpcEndpointServicePrivateDnsVerificationRequest withHeaders(PostStartVpcEndpointServicePrivateDnsVerificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartVpcEndpointServicePrivateDnsVerificationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}