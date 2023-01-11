package openapisdk.models.operations;



public class HistoryListForFileRequest {
    public HistoryListForFilePathParams pathParams;
    public HistoryListForFileRequest withPathParams(HistoryListForFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public HistoryListForFileQueryParams queryParams;
    public HistoryListForFileRequest withQueryParams(HistoryListForFileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}