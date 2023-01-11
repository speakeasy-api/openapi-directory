package openapisdk.models.operations;



public class GetStoreReportByDayPerStoreResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreReportByDayPerStoreResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreReportByDayPerStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreReportByDayPerStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, openapisdk.models.shared.ReportByDayResponse> reportByDayPerStoreResponse;
    public GetStoreReportByDayPerStoreResponse withReportByDayPerStoreResponse(java.util.Map<String, openapisdk.models.shared.ReportByDayResponse> reportByDayPerStoreResponse) {
        this.reportByDayPerStoreResponse = reportByDayPerStoreResponse;
        return this;
    }
}