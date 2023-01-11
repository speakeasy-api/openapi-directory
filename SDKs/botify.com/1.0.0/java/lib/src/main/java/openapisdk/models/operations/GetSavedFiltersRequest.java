package openapisdk.models.operations;



public class GetSavedFiltersRequest {
    public GetSavedFiltersPathParams pathParams;
    public GetSavedFiltersRequest withPathParams(GetSavedFiltersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSavedFiltersQueryParams queryParams;
    public GetSavedFiltersRequest withQueryParams(GetSavedFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}