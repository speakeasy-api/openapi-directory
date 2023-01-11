package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachLoadBalancerTargetGroupsRequest {
    public PostAttachLoadBalancerTargetGroupsQueryParams queryParams;
    public PostAttachLoadBalancerTargetGroupsRequest withQueryParams(PostAttachLoadBalancerTargetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachLoadBalancerTargetGroupsHeaders headers;
    public PostAttachLoadBalancerTargetGroupsRequest withHeaders(PostAttachLoadBalancerTargetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachLoadBalancerTargetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}