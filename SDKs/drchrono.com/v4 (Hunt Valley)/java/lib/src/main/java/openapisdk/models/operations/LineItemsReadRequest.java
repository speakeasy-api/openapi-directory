package openapisdk.models.operations;



public class LineItemsReadRequest {
    public LineItemsReadPathParams pathParams;
    public LineItemsReadRequest withPathParams(LineItemsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LineItemsReadQueryParams queryParams;
    public LineItemsReadRequest withQueryParams(LineItemsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LineItemsReadSecurity security;
    public LineItemsReadRequest withSecurity(LineItemsReadSecurity security) {
        this.security = security;
        return this;
    }
}