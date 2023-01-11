package openapisdk.models.operations;



public class ListConnectorDefinitionVersionsRequest {
    public ListConnectorDefinitionVersionsPathParams pathParams;
    public ListConnectorDefinitionVersionsRequest withPathParams(ListConnectorDefinitionVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConnectorDefinitionVersionsQueryParams queryParams;
    public ListConnectorDefinitionVersionsRequest withQueryParams(ListConnectorDefinitionVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConnectorDefinitionVersionsHeaders headers;
    public ListConnectorDefinitionVersionsRequest withHeaders(ListConnectorDefinitionVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}