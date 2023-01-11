package openapisdk.models.operations;



public class GetGetMetricStreamRequest {
    public GetGetMetricStreamQueryParams queryParams;
    public GetGetMetricStreamRequest withQueryParams(GetGetMetricStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGetMetricStreamHeaders headers;
    public GetGetMetricStreamRequest withHeaders(GetGetMetricStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
}