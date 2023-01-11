package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoadBalancerPolicyRequest {
    public PostDeleteLoadBalancerPolicyQueryParams queryParams;
    public PostDeleteLoadBalancerPolicyRequest withQueryParams(PostDeleteLoadBalancerPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLoadBalancerPolicyHeaders headers;
    public PostDeleteLoadBalancerPolicyRequest withHeaders(PostDeleteLoadBalancerPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLoadBalancerPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}