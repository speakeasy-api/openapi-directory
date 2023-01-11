package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetLoadBalancerPoliciesOfListenerRequest {
    public PostSetLoadBalancerPoliciesOfListenerQueryParams queryParams;
    public PostSetLoadBalancerPoliciesOfListenerRequest withQueryParams(PostSetLoadBalancerPoliciesOfListenerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetLoadBalancerPoliciesOfListenerHeaders headers;
    public PostSetLoadBalancerPoliciesOfListenerRequest withHeaders(PostSetLoadBalancerPoliciesOfListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetLoadBalancerPoliciesOfListenerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}