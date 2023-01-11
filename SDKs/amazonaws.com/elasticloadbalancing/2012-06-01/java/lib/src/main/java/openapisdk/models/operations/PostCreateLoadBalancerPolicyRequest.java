package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoadBalancerPolicyRequest {
    public PostCreateLoadBalancerPolicyQueryParams queryParams;
    public PostCreateLoadBalancerPolicyRequest withQueryParams(PostCreateLoadBalancerPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLoadBalancerPolicyHeaders headers;
    public PostCreateLoadBalancerPolicyRequest withHeaders(PostCreateLoadBalancerPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLoadBalancerPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}