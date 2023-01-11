package openapisdk.models.operations;



public class ListEulasRequest {
    public ListEulasQueryParams queryParams;
    public ListEulasRequest withQueryParams(ListEulasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEulasHeaders headers;
    public ListEulasRequest withHeaders(ListEulasHeaders headers) {
        this.headers = headers;
        return this;
    }
}