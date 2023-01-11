package openapisdk.models.operations;



public class GetPromotionSummaryReportResponse {
    public String contentType;
    public GetPromotionSummaryReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPromotionSummaryReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SummaryReportResponse summaryReportResponse;
    public GetPromotionSummaryReportResponse withSummaryReportResponse(openapisdk.models.shared.SummaryReportResponse summaryReportResponse) {
        this.summaryReportResponse = summaryReportResponse;
        return this;
    }
}