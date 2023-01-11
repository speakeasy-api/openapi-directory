package openapisdk.models.operations;



public class LineItemsDeleteRequest {
    public LineItemsDeletePathParams pathParams;
    public LineItemsDeleteRequest withPathParams(LineItemsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LineItemsDeleteQueryParams queryParams;
    public LineItemsDeleteRequest withQueryParams(LineItemsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LineItemsDeleteSecurity security;
    public LineItemsDeleteRequest withSecurity(LineItemsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}