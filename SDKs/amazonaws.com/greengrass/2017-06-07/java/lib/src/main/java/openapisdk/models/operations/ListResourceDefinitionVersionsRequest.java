package openapisdk.models.operations;



public class ListResourceDefinitionVersionsRequest {
    public ListResourceDefinitionVersionsPathParams pathParams;
    public ListResourceDefinitionVersionsRequest withPathParams(ListResourceDefinitionVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListResourceDefinitionVersionsQueryParams queryParams;
    public ListResourceDefinitionVersionsRequest withQueryParams(ListResourceDefinitionVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourceDefinitionVersionsHeaders headers;
    public ListResourceDefinitionVersionsRequest withHeaders(ListResourceDefinitionVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}