package openapisdk.models.operations;



public class ListCustomPluginsRequest {
    public ListCustomPluginsQueryParams queryParams;
    public ListCustomPluginsRequest withQueryParams(ListCustomPluginsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomPluginsHeaders headers;
    public ListCustomPluginsRequest withHeaders(ListCustomPluginsHeaders headers) {
        this.headers = headers;
        return this;
    }
}