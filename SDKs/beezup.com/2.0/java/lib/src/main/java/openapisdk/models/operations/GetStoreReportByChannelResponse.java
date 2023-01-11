package openapisdk.models.operations;



public class GetStoreReportByChannelResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreReportByChannelResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreReportByChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreReportByChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReportByChannelResponse reportByChannelResponse;
    public GetStoreReportByChannelResponse withReportByChannelResponse(openapisdk.models.shared.ReportByChannelResponse reportByChannelResponse) {
        this.reportByChannelResponse = reportByChannelResponse;
        return this;
    }
}