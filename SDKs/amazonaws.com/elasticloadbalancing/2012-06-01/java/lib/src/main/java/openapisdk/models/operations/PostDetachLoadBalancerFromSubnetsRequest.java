package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachLoadBalancerFromSubnetsRequest {
    public PostDetachLoadBalancerFromSubnetsQueryParams queryParams;
    public PostDetachLoadBalancerFromSubnetsRequest withQueryParams(PostDetachLoadBalancerFromSubnetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachLoadBalancerFromSubnetsHeaders headers;
    public PostDetachLoadBalancerFromSubnetsRequest withHeaders(PostDetachLoadBalancerFromSubnetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachLoadBalancerFromSubnetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}