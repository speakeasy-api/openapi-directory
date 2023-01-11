package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoadBalancerRequest {
    public PostCreateLoadBalancerQueryParams queryParams;
    public PostCreateLoadBalancerRequest withQueryParams(PostCreateLoadBalancerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLoadBalancerHeaders headers;
    public PostCreateLoadBalancerRequest withHeaders(PostCreateLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLoadBalancerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}