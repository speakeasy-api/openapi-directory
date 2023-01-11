package openapisdk.models.operations;



public class GetDeleteMetricStreamRequest {
    public GetDeleteMetricStreamQueryParams queryParams;
    public GetDeleteMetricStreamRequest withQueryParams(GetDeleteMetricStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDeleteMetricStreamHeaders headers;
    public GetDeleteMetricStreamRequest withHeaders(GetDeleteMetricStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
}