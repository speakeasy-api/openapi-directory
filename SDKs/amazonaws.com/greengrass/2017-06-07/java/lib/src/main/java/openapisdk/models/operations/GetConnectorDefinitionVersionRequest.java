package openapisdk.models.operations;



public class GetConnectorDefinitionVersionRequest {
    public GetConnectorDefinitionVersionPathParams pathParams;
    public GetConnectorDefinitionVersionRequest withPathParams(GetConnectorDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConnectorDefinitionVersionQueryParams queryParams;
    public GetConnectorDefinitionVersionRequest withQueryParams(GetConnectorDefinitionVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConnectorDefinitionVersionHeaders headers;
    public GetConnectorDefinitionVersionRequest withHeaders(GetConnectorDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
}