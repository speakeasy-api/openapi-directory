package openapisdk.models.operations;



public class MerchantsDeleteRequest {
    public MerchantsDeletePathParams pathParams;
    public MerchantsDeleteRequest withPathParams(MerchantsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MerchantsDeleteQueryParams queryParams;
    public MerchantsDeleteRequest withQueryParams(MerchantsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MerchantsDeleteHeaders headers;
    public MerchantsDeleteRequest withHeaders(MerchantsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public MerchantsDeleteSecurity security;
    public MerchantsDeleteRequest withSecurity(MerchantsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}