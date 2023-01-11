package openapisdk.models.operations;



public class GetStartMetricStreamsRequest {
    public GetStartMetricStreamsQueryParams queryParams;
    public GetStartMetricStreamsRequest withQueryParams(GetStartMetricStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStartMetricStreamsHeaders headers;
    public GetStartMetricStreamsRequest withHeaders(GetStartMetricStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
}