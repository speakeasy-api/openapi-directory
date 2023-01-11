package openapisdk.models.operations;



public class GetPayoutSummaryRequest {
    public GetPayoutSummaryQueryParams queryParams;
    public GetPayoutSummaryRequest withQueryParams(GetPayoutSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPayoutSummarySecurity security;
    public GetPayoutSummaryRequest withSecurity(GetPayoutSummarySecurity security) {
        this.security = security;
        return this;
    }
}