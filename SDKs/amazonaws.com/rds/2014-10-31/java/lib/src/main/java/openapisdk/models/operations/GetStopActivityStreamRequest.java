package openapisdk.models.operations;



public class GetStopActivityStreamRequest {
    public GetStopActivityStreamQueryParams queryParams;
    public GetStopActivityStreamRequest withQueryParams(GetStopActivityStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStopActivityStreamHeaders headers;
    public GetStopActivityStreamRequest withHeaders(GetStopActivityStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
}