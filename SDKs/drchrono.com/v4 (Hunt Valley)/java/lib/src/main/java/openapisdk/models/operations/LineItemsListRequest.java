package openapisdk.models.operations;



public class LineItemsListRequest {
    public LineItemsListQueryParams queryParams;
    public LineItemsListRequest withQueryParams(LineItemsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LineItemsListSecurity security;
    public LineItemsListRequest withSecurity(LineItemsListSecurity security) {
        this.security = security;
        return this;
    }
}