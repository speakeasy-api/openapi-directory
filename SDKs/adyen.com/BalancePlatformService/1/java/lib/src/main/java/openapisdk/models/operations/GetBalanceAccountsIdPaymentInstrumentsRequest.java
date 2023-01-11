package openapisdk.models.operations;



public class GetBalanceAccountsIdPaymentInstrumentsRequest {
    public GetBalanceAccountsIdPaymentInstrumentsPathParams pathParams;
    public GetBalanceAccountsIdPaymentInstrumentsRequest withPathParams(GetBalanceAccountsIdPaymentInstrumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBalanceAccountsIdPaymentInstrumentsQueryParams queryParams;
    public GetBalanceAccountsIdPaymentInstrumentsRequest withQueryParams(GetBalanceAccountsIdPaymentInstrumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBalanceAccountsIdPaymentInstrumentsSecurity security;
    public GetBalanceAccountsIdPaymentInstrumentsRequest withSecurity(GetBalanceAccountsIdPaymentInstrumentsSecurity security) {
        this.security = security;
        return this;
    }
}