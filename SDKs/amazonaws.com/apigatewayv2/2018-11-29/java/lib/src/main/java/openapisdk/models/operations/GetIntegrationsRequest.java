package openapisdk.models.operations;



public class GetIntegrationsRequest {
    public GetIntegrationsPathParams pathParams;
    public GetIntegrationsRequest withPathParams(GetIntegrationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIntegrationsQueryParams queryParams;
    public GetIntegrationsRequest withQueryParams(GetIntegrationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetIntegrationsHeaders headers;
    public GetIntegrationsRequest withHeaders(GetIntegrationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}