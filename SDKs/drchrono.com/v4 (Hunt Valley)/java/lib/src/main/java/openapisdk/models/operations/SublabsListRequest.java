package openapisdk.models.operations;



public class SublabsListRequest {
    public SublabsListQueryParams queryParams;
    public SublabsListRequest withQueryParams(SublabsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SublabsListSecurity security;
    public SublabsListRequest withSecurity(SublabsListSecurity security) {
        this.security = security;
        return this;
    }
}