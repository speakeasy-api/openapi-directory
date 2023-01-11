package openapisdk.models.operations;



public class GetStatsRequest {
    public GetStatsQueryParams queryParams;
    public GetStatsRequest withQueryParams(GetStatsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStatsHeaders headers;
    public GetStatsRequest withHeaders(GetStatsHeaders headers) {
        this.headers = headers;
        return this;
    }
}