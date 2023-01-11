package openapisdk.models.operations;



public class GetLogsAggregateRequest {
    public GetLogsAggregatePathParams pathParams;
    public GetLogsAggregateRequest withPathParams(GetLogsAggregatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLogsAggregateQueryParams queryParams;
    public GetLogsAggregateRequest withQueryParams(GetLogsAggregateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}