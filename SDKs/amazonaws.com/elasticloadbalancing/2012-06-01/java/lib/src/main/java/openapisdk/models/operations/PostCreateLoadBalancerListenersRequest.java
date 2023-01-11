package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoadBalancerListenersRequest {
    public PostCreateLoadBalancerListenersQueryParams queryParams;
    public PostCreateLoadBalancerListenersRequest withQueryParams(PostCreateLoadBalancerListenersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLoadBalancerListenersHeaders headers;
    public PostCreateLoadBalancerListenersRequest withHeaders(PostCreateLoadBalancerListenersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLoadBalancerListenersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}