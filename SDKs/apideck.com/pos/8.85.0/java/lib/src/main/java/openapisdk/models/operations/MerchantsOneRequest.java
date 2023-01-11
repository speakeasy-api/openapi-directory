package openapisdk.models.operations;



public class MerchantsOneRequest {
    public MerchantsOnePathParams pathParams;
    public MerchantsOneRequest withPathParams(MerchantsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MerchantsOneQueryParams queryParams;
    public MerchantsOneRequest withQueryParams(MerchantsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MerchantsOneHeaders headers;
    public MerchantsOneRequest withHeaders(MerchantsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public MerchantsOneSecurity security;
    public MerchantsOneRequest withSecurity(MerchantsOneSecurity security) {
        this.security = security;
        return this;
    }
}