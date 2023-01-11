package openapisdk.models.operations;



public class GetStoreReportByProductResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreReportByProductResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreReportByProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreReportByProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReportByProductResponse reportByProductResponse;
    public GetStoreReportByProductResponse withReportByProductResponse(openapisdk.models.shared.ReportByProductResponse reportByProductResponse) {
        this.reportByProductResponse = reportByProductResponse;
        return this;
    }
}