package openapisdk.models.operations;



public class GetPromotionReportsResponse {
    public String contentType;
    public GetPromotionReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PromotionsReportPagedCollection promotionsReportPagedCollection;
    public GetPromotionReportsResponse withPromotionsReportPagedCollection(openapisdk.models.shared.PromotionsReportPagedCollection promotionsReportPagedCollection) {
        this.promotionsReportPagedCollection = promotionsReportPagedCollection;
        return this;
    }
    public Long statusCode;
    public GetPromotionReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}