package openapisdk.models.operations;



public class ListResolversRequest {
    public ListResolversPathParams pathParams;
    public ListResolversRequest withPathParams(ListResolversPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListResolversQueryParams queryParams;
    public ListResolversRequest withQueryParams(ListResolversQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolversHeaders headers;
    public ListResolversRequest withHeaders(ListResolversHeaders headers) {
        this.headers = headers;
        return this;
    }
}