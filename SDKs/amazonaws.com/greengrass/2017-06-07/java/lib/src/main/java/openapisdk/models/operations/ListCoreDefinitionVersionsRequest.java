package openapisdk.models.operations;



public class ListCoreDefinitionVersionsRequest {
    public ListCoreDefinitionVersionsPathParams pathParams;
    public ListCoreDefinitionVersionsRequest withPathParams(ListCoreDefinitionVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCoreDefinitionVersionsQueryParams queryParams;
    public ListCoreDefinitionVersionsRequest withQueryParams(ListCoreDefinitionVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCoreDefinitionVersionsHeaders headers;
    public ListCoreDefinitionVersionsRequest withHeaders(ListCoreDefinitionVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}