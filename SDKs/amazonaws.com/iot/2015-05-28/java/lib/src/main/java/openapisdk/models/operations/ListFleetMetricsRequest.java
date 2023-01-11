package openapisdk.models.operations;



public class ListFleetMetricsRequest {
    public ListFleetMetricsQueryParams queryParams;
    public ListFleetMetricsRequest withQueryParams(ListFleetMetricsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFleetMetricsHeaders headers;
    public ListFleetMetricsRequest withHeaders(ListFleetMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
}