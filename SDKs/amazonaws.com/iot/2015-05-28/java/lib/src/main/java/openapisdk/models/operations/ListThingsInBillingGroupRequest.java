package openapisdk.models.operations;



public class ListThingsInBillingGroupRequest {
    public ListThingsInBillingGroupPathParams pathParams;
    public ListThingsInBillingGroupRequest withPathParams(ListThingsInBillingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListThingsInBillingGroupQueryParams queryParams;
    public ListThingsInBillingGroupRequest withQueryParams(ListThingsInBillingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListThingsInBillingGroupHeaders headers;
    public ListThingsInBillingGroupRequest withHeaders(ListThingsInBillingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}