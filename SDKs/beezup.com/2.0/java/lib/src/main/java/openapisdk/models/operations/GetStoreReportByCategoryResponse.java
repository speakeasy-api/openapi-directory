package openapisdk.models.operations;



public class GetStoreReportByCategoryResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreReportByCategoryResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreReportByCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreReportByCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReportByCategoryResponse reportByCategoryResponse;
    public GetStoreReportByCategoryResponse withReportByCategoryResponse(openapisdk.models.shared.ReportByCategoryResponse reportByCategoryResponse) {
        this.reportByCategoryResponse = reportByCategoryResponse;
        return this;
    }
}