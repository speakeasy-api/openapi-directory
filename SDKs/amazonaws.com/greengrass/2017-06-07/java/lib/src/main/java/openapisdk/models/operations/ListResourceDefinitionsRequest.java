package openapisdk.models.operations;



public class ListResourceDefinitionsRequest {
    public ListResourceDefinitionsQueryParams queryParams;
    public ListResourceDefinitionsRequest withQueryParams(ListResourceDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourceDefinitionsHeaders headers;
    public ListResourceDefinitionsRequest withHeaders(ListResourceDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}