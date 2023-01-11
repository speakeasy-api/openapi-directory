package openapisdk.models.operations;



public class LineItemsCreateRequest {
    public LineItemsCreateQueryParams queryParams;
    public LineItemsCreateRequest withQueryParams(LineItemsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LineItemsCreateSecurity security;
    public LineItemsCreateRequest withSecurity(LineItemsCreateSecurity security) {
        this.security = security;
        return this;
    }
}