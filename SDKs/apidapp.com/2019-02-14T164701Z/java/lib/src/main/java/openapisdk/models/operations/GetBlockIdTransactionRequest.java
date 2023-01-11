package openapisdk.models.operations;



public class GetBlockIdTransactionRequest {
    public GetBlockIdTransactionPathParams pathParams;
    public GetBlockIdTransactionRequest withPathParams(GetBlockIdTransactionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBlockIdTransactionSecurity security;
    public GetBlockIdTransactionRequest withSecurity(GetBlockIdTransactionSecurity security) {
        this.security = security;
        return this;
    }
}