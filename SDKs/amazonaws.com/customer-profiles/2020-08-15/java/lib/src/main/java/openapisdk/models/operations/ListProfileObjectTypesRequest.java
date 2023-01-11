package openapisdk.models.operations;



public class ListProfileObjectTypesRequest {
    public ListProfileObjectTypesPathParams pathParams;
    public ListProfileObjectTypesRequest withPathParams(ListProfileObjectTypesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListProfileObjectTypesQueryParams queryParams;
    public ListProfileObjectTypesRequest withQueryParams(ListProfileObjectTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProfileObjectTypesHeaders headers;
    public ListProfileObjectTypesRequest withHeaders(ListProfileObjectTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
}