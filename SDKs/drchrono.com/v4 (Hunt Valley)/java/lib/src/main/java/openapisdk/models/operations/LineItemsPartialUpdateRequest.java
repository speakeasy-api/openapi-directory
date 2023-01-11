package openapisdk.models.operations;



public class LineItemsPartialUpdateRequest {
    public LineItemsPartialUpdatePathParams pathParams;
    public LineItemsPartialUpdateRequest withPathParams(LineItemsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LineItemsPartialUpdateQueryParams queryParams;
    public LineItemsPartialUpdateRequest withQueryParams(LineItemsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LineItemsPartialUpdateSecurity security;
    public LineItemsPartialUpdateRequest withSecurity(LineItemsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}