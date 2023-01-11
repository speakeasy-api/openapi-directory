package openapisdk.models.operations;



public class GetStoreTrackedOrdersRequest {
    public GetStoreTrackedOrdersPathParams pathParams;
    public GetStoreTrackedOrdersRequest withPathParams(GetStoreTrackedOrdersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStoreTrackedOrdersQueryParams queryParams;
    public GetStoreTrackedOrdersRequest withQueryParams(GetStoreTrackedOrdersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}