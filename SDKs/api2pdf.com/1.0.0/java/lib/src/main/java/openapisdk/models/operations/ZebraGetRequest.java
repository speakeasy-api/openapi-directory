package openapisdk.models.operations;



public class ZebraGetRequest {
    public ZebraGetQueryParams queryParams;
    public ZebraGetRequest withQueryParams(ZebraGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ZebraGetSecurity security;
    public ZebraGetRequest withSecurity(ZebraGetSecurity security) {
        this.security = security;
        return this;
    }
}