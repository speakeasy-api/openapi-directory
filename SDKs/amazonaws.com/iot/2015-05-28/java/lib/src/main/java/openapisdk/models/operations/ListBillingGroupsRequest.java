package openapisdk.models.operations;



public class ListBillingGroupsRequest {
    public ListBillingGroupsQueryParams queryParams;
    public ListBillingGroupsRequest withQueryParams(ListBillingGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBillingGroupsHeaders headers;
    public ListBillingGroupsRequest withHeaders(ListBillingGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}