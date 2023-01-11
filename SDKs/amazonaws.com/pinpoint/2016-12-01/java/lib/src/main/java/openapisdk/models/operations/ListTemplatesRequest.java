package openapisdk.models.operations;



public class ListTemplatesRequest {
    public ListTemplatesQueryParams queryParams;
    public ListTemplatesRequest withQueryParams(ListTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTemplatesHeaders headers;
    public ListTemplatesRequest withHeaders(ListTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}