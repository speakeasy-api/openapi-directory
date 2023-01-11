package openapisdk.models.operations;



public class GetHistoryExportsIdResponse {
    public String contentType;
    public GetHistoryExportsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HistoryExportEntity historyExportEntity;
    public GetHistoryExportsIdResponse withHistoryExportEntity(openapisdk.models.shared.HistoryExportEntity historyExportEntity) {
        this.historyExportEntity = historyExportEntity;
        return this;
    }
    public Long statusCode;
    public GetHistoryExportsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}