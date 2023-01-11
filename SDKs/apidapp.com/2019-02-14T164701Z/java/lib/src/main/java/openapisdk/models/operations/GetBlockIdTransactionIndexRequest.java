package openapisdk.models.operations;



public class GetBlockIdTransactionIndexRequest {
    public GetBlockIdTransactionIndexPathParams pathParams;
    public GetBlockIdTransactionIndexRequest withPathParams(GetBlockIdTransactionIndexPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBlockIdTransactionIndexSecurity security;
    public GetBlockIdTransactionIndexRequest withSecurity(GetBlockIdTransactionIndexSecurity security) {
        this.security = security;
        return this;
    }
}