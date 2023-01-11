package openapisdk.models.operations;



public class GetAttachLoadBalancersRequest {
    public GetAttachLoadBalancersQueryParams queryParams;
    public GetAttachLoadBalancersRequest withQueryParams(GetAttachLoadBalancersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAttachLoadBalancersHeaders headers;
    public GetAttachLoadBalancersRequest withHeaders(GetAttachLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
}