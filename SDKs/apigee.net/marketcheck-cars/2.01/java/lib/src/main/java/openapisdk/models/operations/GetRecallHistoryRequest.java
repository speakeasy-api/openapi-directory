package openapisdk.models.operations;



public class GetRecallHistoryRequest {
    public GetRecallHistoryPathParams pathParams;
    public GetRecallHistoryRequest withPathParams(GetRecallHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRecallHistoryQueryParams queryParams;
    public GetRecallHistoryRequest withQueryParams(GetRecallHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}