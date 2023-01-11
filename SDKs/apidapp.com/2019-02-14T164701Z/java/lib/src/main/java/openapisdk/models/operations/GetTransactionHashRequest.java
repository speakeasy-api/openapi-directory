package openapisdk.models.operations;



public class GetTransactionHashRequest {
    public GetTransactionHashPathParams pathParams;
    public GetTransactionHashRequest withPathParams(GetTransactionHashPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionHashSecurity security;
    public GetTransactionHashRequest withSecurity(GetTransactionHashSecurity security) {
        this.security = security;
        return this;
    }
}