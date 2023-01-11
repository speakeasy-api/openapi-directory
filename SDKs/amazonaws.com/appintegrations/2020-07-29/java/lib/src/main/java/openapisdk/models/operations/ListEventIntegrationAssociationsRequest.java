package openapisdk.models.operations;



public class ListEventIntegrationAssociationsRequest {
    public ListEventIntegrationAssociationsPathParams pathParams;
    public ListEventIntegrationAssociationsRequest withPathParams(ListEventIntegrationAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListEventIntegrationAssociationsQueryParams queryParams;
    public ListEventIntegrationAssociationsRequest withQueryParams(ListEventIntegrationAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventIntegrationAssociationsHeaders headers;
    public ListEventIntegrationAssociationsRequest withHeaders(ListEventIntegrationAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}