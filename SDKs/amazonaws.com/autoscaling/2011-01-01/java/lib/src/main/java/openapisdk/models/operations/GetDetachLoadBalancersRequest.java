package openapisdk.models.operations;



public class GetDetachLoadBalancersRequest {
    public GetDetachLoadBalancersQueryParams queryParams;
    public GetDetachLoadBalancersRequest withQueryParams(GetDetachLoadBalancersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDetachLoadBalancersHeaders headers;
    public GetDetachLoadBalancersRequest withHeaders(GetDetachLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
}