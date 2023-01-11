package openapisdk.models.operations;



public class PutV3UsageBatchesIdResponse {
    public String contentType;
    public PutV3UsageBatchesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutV3UsageBatchesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReportUsageBatchResponse reportUsageBatchResponse;
    public PutV3UsageBatchesIdResponse withReportUsageBatchResponse(openapisdk.models.shared.ReportUsageBatchResponse reportUsageBatchResponse) {
        this.reportUsageBatchResponse = reportUsageBatchResponse;
        return this;
    }
}