package openapisdk.models.operations;



public class ListIntegrationsRequest {
    public ListIntegrationsPathParams pathParams;
    public ListIntegrationsRequest withPathParams(ListIntegrationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIntegrationsQueryParams queryParams;
    public ListIntegrationsRequest withQueryParams(ListIntegrationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIntegrationsHeaders headers;
    public ListIntegrationsRequest withHeaders(ListIntegrationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}