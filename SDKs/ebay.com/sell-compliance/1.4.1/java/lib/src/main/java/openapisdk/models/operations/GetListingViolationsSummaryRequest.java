package openapisdk.models.operations;



public class GetListingViolationsSummaryRequest {
    public GetListingViolationsSummaryQueryParams queryParams;
    public GetListingViolationsSummaryRequest withQueryParams(GetListingViolationsSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListingViolationsSummaryHeaders headers;
    public GetListingViolationsSummaryRequest withHeaders(GetListingViolationsSummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetListingViolationsSummarySecurity security;
    public GetListingViolationsSummaryRequest withSecurity(GetListingViolationsSummarySecurity security) {
        this.security = security;
        return this;
    }
}