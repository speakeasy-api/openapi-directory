package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyLoadBalancerAttributesRequest {
    public PostModifyLoadBalancerAttributesQueryParams queryParams;
    public PostModifyLoadBalancerAttributesRequest withQueryParams(PostModifyLoadBalancerAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyLoadBalancerAttributesHeaders headers;
    public PostModifyLoadBalancerAttributesRequest withHeaders(PostModifyLoadBalancerAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyLoadBalancerAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}