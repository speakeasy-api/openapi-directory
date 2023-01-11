package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoadBalancerListenersRequest {
    public PostDeleteLoadBalancerListenersQueryParams queryParams;
    public PostDeleteLoadBalancerListenersRequest withQueryParams(PostDeleteLoadBalancerListenersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLoadBalancerListenersHeaders headers;
    public PostDeleteLoadBalancerListenersRequest withHeaders(PostDeleteLoadBalancerListenersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLoadBalancerListenersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}