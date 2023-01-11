package openapisdk.models.operations;



public class ListEventIntegrationsRequest {
    public ListEventIntegrationsQueryParams queryParams;
    public ListEventIntegrationsRequest withQueryParams(ListEventIntegrationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventIntegrationsHeaders headers;
    public ListEventIntegrationsRequest withHeaders(ListEventIntegrationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}