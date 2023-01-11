package openapisdk.models.operations;



public class ListAddonsRequest {
    public ListAddonsPathParams pathParams;
    public ListAddonsRequest withPathParams(ListAddonsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAddonsQueryParams queryParams;
    public ListAddonsRequest withQueryParams(ListAddonsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAddonsHeaders headers;
    public ListAddonsRequest withHeaders(ListAddonsHeaders headers) {
        this.headers = headers;
        return this;
    }
}