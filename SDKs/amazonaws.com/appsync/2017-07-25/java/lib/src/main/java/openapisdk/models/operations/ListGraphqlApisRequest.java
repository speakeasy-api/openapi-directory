package openapisdk.models.operations;



public class ListGraphqlApisRequest {
    public ListGraphqlApisQueryParams queryParams;
    public ListGraphqlApisRequest withQueryParams(ListGraphqlApisQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGraphqlApisHeaders headers;
    public ListGraphqlApisRequest withHeaders(ListGraphqlApisHeaders headers) {
        this.headers = headers;
        return this;
    }
}