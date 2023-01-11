package openapisdk.models.operations;



public class GetTransactionHashReceiptRequest {
    public GetTransactionHashReceiptPathParams pathParams;
    public GetTransactionHashReceiptRequest withPathParams(GetTransactionHashReceiptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionHashReceiptSecurity security;
    public GetTransactionHashReceiptRequest withSecurity(GetTransactionHashReceiptSecurity security) {
        this.security = security;
        return this;
    }
}