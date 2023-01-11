package openapisdk.models.operations;



public class DeleteFleetMetricRequest {
    public DeleteFleetMetricPathParams pathParams;
    public DeleteFleetMetricRequest withPathParams(DeleteFleetMetricPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFleetMetricQueryParams queryParams;
    public DeleteFleetMetricRequest withQueryParams(DeleteFleetMetricQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteFleetMetricHeaders headers;
    public DeleteFleetMetricRequest withHeaders(DeleteFleetMetricHeaders headers) {
        this.headers = headers;
        return this;
    }
}