package openapisdk.models.operations;



public class GetDetachLoadBalancerTargetGroupsRequest {
    public GetDetachLoadBalancerTargetGroupsQueryParams queryParams;
    public GetDetachLoadBalancerTargetGroupsRequest withQueryParams(GetDetachLoadBalancerTargetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDetachLoadBalancerTargetGroupsHeaders headers;
    public GetDetachLoadBalancerTargetGroupsRequest withHeaders(GetDetachLoadBalancerTargetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}