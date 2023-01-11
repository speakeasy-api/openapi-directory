package openapisdk.models.operations;



public class ListVaultsRequest {
    public ListVaultsPathParams pathParams;
    public ListVaultsRequest withPathParams(ListVaultsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVaultsQueryParams queryParams;
    public ListVaultsRequest withQueryParams(ListVaultsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVaultsHeaders headers;
    public ListVaultsRequest withHeaders(ListVaultsHeaders headers) {
        this.headers = headers;
        return this;
    }
}