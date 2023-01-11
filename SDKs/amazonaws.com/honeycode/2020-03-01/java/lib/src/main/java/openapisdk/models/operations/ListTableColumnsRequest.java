package openapisdk.models.operations;



public class ListTableColumnsRequest {
    public ListTableColumnsPathParams pathParams;
    public ListTableColumnsRequest withPathParams(ListTableColumnsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTableColumnsQueryParams queryParams;
    public ListTableColumnsRequest withQueryParams(ListTableColumnsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTableColumnsHeaders headers;
    public ListTableColumnsRequest withHeaders(ListTableColumnsHeaders headers) {
        this.headers = headers;
        return this;
    }
}