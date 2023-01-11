package openapisdk.models.operations;



public class GetListMetricStreamsRequest {
    public GetListMetricStreamsQueryParams queryParams;
    public GetListMetricStreamsRequest withQueryParams(GetListMetricStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListMetricStreamsHeaders headers;
    public GetListMetricStreamsRequest withHeaders(GetListMetricStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
}