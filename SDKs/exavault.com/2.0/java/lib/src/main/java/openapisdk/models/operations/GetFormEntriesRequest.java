package openapisdk.models.operations;



public class GetFormEntriesRequest {
    public GetFormEntriesPathParams pathParams;
    public GetFormEntriesRequest withPathParams(GetFormEntriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFormEntriesQueryParams queryParams;
    public GetFormEntriesRequest withQueryParams(GetFormEntriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFormEntriesHeaders headers;
    public GetFormEntriesRequest withHeaders(GetFormEntriesHeaders headers) {
        this.headers = headers;
        return this;
    }
}