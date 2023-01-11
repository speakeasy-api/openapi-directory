package openapisdk.models.operations;



public class GetHistoryExportResultsResponse {
    public String contentType;
    public GetHistoryExportResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HistoryExportResultEntity[] historyExportResultEntities;
    public GetHistoryExportResultsResponse withHistoryExportResultEntities(openapisdk.models.shared.HistoryExportResultEntity[] historyExportResultEntities) {
        this.historyExportResultEntities = historyExportResultEntities;
        return this;
    }
    public Long statusCode;
    public GetHistoryExportResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}