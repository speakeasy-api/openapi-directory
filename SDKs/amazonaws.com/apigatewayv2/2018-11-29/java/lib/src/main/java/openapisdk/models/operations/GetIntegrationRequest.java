package openapisdk.models.operations;



public class GetIntegrationRequest {
    public GetIntegrationPathParams pathParams;
    public GetIntegrationRequest withPathParams(GetIntegrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIntegrationHeaders headers;
    public GetIntegrationRequest withHeaders(GetIntegrationHeaders headers) {
        this.headers = headers;
        return this;
    }
}