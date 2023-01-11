package openapisdk.models.operations;



public class PostHistoryExportsResponse {
    public String contentType;
    public PostHistoryExportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HistoryExportEntity historyExportEntity;
    public PostHistoryExportsResponse withHistoryExportEntity(openapisdk.models.shared.HistoryExportEntity historyExportEntity) {
        this.historyExportEntity = historyExportEntity;
        return this;
    }
    public Long statusCode;
    public PostHistoryExportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}