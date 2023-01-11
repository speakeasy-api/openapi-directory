package openapisdk.models.operations;



public class HarvestAccountRequest {
    public HarvestAccountPathParams pathParams;
    public HarvestAccountRequest withPathParams(HarvestAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public HarvestAccountQueryParams queryParams;
    public HarvestAccountRequest withQueryParams(HarvestAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}