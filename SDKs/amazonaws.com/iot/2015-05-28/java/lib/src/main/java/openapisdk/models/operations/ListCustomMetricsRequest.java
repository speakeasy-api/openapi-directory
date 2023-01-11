package openapisdk.models.operations;



public class ListCustomMetricsRequest {
    public ListCustomMetricsQueryParams queryParams;
    public ListCustomMetricsRequest withQueryParams(ListCustomMetricsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomMetricsHeaders headers;
    public ListCustomMetricsRequest withHeaders(ListCustomMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
}