package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachLoadBalancerTargetGroupsRequest {
    public PostDetachLoadBalancerTargetGroupsQueryParams queryParams;
    public PostDetachLoadBalancerTargetGroupsRequest withQueryParams(PostDetachLoadBalancerTargetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachLoadBalancerTargetGroupsHeaders headers;
    public PostDetachLoadBalancerTargetGroupsRequest withHeaders(PostDetachLoadBalancerTargetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachLoadBalancerTargetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}