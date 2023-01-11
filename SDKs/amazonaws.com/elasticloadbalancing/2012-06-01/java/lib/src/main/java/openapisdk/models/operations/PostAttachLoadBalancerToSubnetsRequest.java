package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachLoadBalancerToSubnetsRequest {
    public PostAttachLoadBalancerToSubnetsQueryParams queryParams;
    public PostAttachLoadBalancerToSubnetsRequest withQueryParams(PostAttachLoadBalancerToSubnetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachLoadBalancerToSubnetsHeaders headers;
    public PostAttachLoadBalancerToSubnetsRequest withHeaders(PostAttachLoadBalancerToSubnetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachLoadBalancerToSubnetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}