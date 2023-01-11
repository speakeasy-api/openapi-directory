package openapisdk.models.operations;



public class GetPromotionReportsRequest {
    public GetPromotionReportsQueryParams queryParams;
    public GetPromotionReportsRequest withQueryParams(GetPromotionReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPromotionReportsSecurity security;
    public GetPromotionReportsRequest withSecurity(GetPromotionReportsSecurity security) {
        this.security = security;
        return this;
    }
}