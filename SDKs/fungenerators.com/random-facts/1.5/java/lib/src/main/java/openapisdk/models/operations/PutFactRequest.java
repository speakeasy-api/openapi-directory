package openapisdk.models.operations;



public class PutFactRequest {
    public PutFactQueryParams queryParams;
    public PutFactRequest withQueryParams(PutFactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutFactSecurity security;
    public PutFactRequest withSecurity(PutFactSecurity security) {
        this.security = security;
        return this;
    }
}