package openapisdk.models.operations;



public class GetPromotionSummaryReportRequest {
    public GetPromotionSummaryReportQueryParams queryParams;
    public GetPromotionSummaryReportRequest withQueryParams(GetPromotionSummaryReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPromotionSummaryReportSecurity security;
    public GetPromotionSummaryReportRequest withSecurity(GetPromotionSummaryReportSecurity security) {
        this.security = security;
        return this;
    }
}