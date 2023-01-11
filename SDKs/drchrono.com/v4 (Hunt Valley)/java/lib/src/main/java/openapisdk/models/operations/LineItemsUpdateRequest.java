package openapisdk.models.operations;



public class LineItemsUpdateRequest {
    public LineItemsUpdatePathParams pathParams;
    public LineItemsUpdateRequest withPathParams(LineItemsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LineItemsUpdateQueryParams queryParams;
    public LineItemsUpdateRequest withQueryParams(LineItemsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LineItemsUpdateSecurity security;
    public LineItemsUpdateRequest withSecurity(LineItemsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}