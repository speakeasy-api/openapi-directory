package openapisdk.models.operations;



public class GetIntegrationResponseRequest {
    public GetIntegrationResponsePathParams pathParams;
    public GetIntegrationResponseRequest withPathParams(GetIntegrationResponsePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIntegrationResponseHeaders headers;
    public GetIntegrationResponseRequest withHeaders(GetIntegrationResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
}