package openapisdk.models.operations;



public class HistoryListForUserRequest {
    public HistoryListForUserPathParams pathParams;
    public HistoryListForUserRequest withPathParams(HistoryListForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public HistoryListForUserQueryParams queryParams;
    public HistoryListForUserRequest withQueryParams(HistoryListForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}