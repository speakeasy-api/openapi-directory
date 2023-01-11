package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachLoadBalancersRequest {
    public PostAttachLoadBalancersQueryParams queryParams;
    public PostAttachLoadBalancersRequest withQueryParams(PostAttachLoadBalancersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachLoadBalancersHeaders headers;
    public PostAttachLoadBalancersRequest withHeaders(PostAttachLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachLoadBalancersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}