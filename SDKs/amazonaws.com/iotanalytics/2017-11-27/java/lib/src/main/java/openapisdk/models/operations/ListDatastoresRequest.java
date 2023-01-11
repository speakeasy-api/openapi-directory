package openapisdk.models.operations;



public class ListDatastoresRequest {
    public ListDatastoresQueryParams queryParams;
    public ListDatastoresRequest withQueryParams(ListDatastoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatastoresHeaders headers;
    public ListDatastoresRequest withHeaders(ListDatastoresHeaders headers) {
        this.headers = headers;
        return this;
    }
}