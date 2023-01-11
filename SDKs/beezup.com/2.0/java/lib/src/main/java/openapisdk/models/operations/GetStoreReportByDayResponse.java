package openapisdk.models.operations;



public class GetStoreReportByDayResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreReportByDayResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreReportByDayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreReportByDayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReportByDayResponse reportByDayResponse;
    public GetStoreReportByDayResponse withReportByDayResponse(openapisdk.models.shared.ReportByDayResponse reportByDayResponse) {
        this.reportByDayResponse = reportByDayResponse;
        return this;
    }
}