package openapisdk.models.operations;



public class GetTransactionSummaryRequest {
    public GetTransactionSummaryQueryParams queryParams;
    public GetTransactionSummaryRequest withQueryParams(GetTransactionSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTransactionSummarySecurity security;
    public GetTransactionSummaryRequest withSecurity(GetTransactionSummarySecurity security) {
        this.security = security;
        return this;
    }
}