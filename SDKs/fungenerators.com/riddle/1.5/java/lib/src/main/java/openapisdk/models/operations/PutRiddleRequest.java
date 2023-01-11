package openapisdk.models.operations;



public class PutRiddleRequest {
    public PutRiddleQueryParams queryParams;
    public PutRiddleRequest withQueryParams(PutRiddleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutRiddleSecurity security;
    public PutRiddleRequest withSecurity(PutRiddleSecurity security) {
        this.security = security;
        return this;
    }
}