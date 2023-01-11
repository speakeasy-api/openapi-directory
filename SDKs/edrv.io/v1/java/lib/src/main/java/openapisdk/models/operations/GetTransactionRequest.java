package openapisdk.models.operations;



public class GetTransactionRequest {
    public GetTransactionPathParams pathParams;
    public GetTransactionRequest withPathParams(GetTransactionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionQueryParams queryParams;
    public GetTransactionRequest withQueryParams(GetTransactionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}