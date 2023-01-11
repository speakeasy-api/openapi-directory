package openapisdk.models.operations;



public class ListDomainsRequest {
    public ListDomainsQueryParams queryParams;
    public ListDomainsRequest withQueryParams(ListDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDomainsHeaders headers;
    public ListDomainsRequest withHeaders(ListDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
}