package openapisdk.models.operations;



public class MerchantsAllRequest {
    public MerchantsAllQueryParams queryParams;
    public MerchantsAllRequest withQueryParams(MerchantsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MerchantsAllHeaders headers;
    public MerchantsAllRequest withHeaders(MerchantsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public MerchantsAllSecurity security;
    public MerchantsAllRequest withSecurity(MerchantsAllSecurity security) {
        this.security = security;
        return this;
    }
}