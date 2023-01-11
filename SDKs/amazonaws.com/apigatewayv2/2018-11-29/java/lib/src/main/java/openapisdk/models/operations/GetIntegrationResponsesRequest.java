package openapisdk.models.operations;



public class GetIntegrationResponsesRequest {
    public GetIntegrationResponsesPathParams pathParams;
    public GetIntegrationResponsesRequest withPathParams(GetIntegrationResponsesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIntegrationResponsesQueryParams queryParams;
    public GetIntegrationResponsesRequest withQueryParams(GetIntegrationResponsesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetIntegrationResponsesHeaders headers;
    public GetIntegrationResponsesRequest withHeaders(GetIntegrationResponsesHeaders headers) {
        this.headers = headers;
        return this;
    }
}