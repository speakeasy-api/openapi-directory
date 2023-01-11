package openapisdk.models.operations;



public class LockListForPathRequest {
    public LockListForPathPathParams pathParams;
    public LockListForPathRequest withPathParams(LockListForPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LockListForPathQueryParams queryParams;
    public LockListForPathRequest withQueryParams(LockListForPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}