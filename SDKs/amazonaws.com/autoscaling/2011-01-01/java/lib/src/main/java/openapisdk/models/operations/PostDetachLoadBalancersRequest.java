package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachLoadBalancersRequest {
    public PostDetachLoadBalancersQueryParams queryParams;
    public PostDetachLoadBalancersRequest withQueryParams(PostDetachLoadBalancersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachLoadBalancersHeaders headers;
    public PostDetachLoadBalancersRequest withHeaders(PostDetachLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachLoadBalancersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}