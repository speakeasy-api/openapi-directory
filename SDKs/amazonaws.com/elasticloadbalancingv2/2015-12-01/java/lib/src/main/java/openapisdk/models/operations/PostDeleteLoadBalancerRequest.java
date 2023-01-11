package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoadBalancerRequest {
    public PostDeleteLoadBalancerQueryParams queryParams;
    public PostDeleteLoadBalancerRequest withQueryParams(PostDeleteLoadBalancerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLoadBalancerHeaders headers;
    public PostDeleteLoadBalancerRequest withHeaders(PostDeleteLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLoadBalancerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}