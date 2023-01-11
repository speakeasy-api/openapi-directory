package openapisdk.models.operations;



public class ListLexiconsRequest {
    public ListLexiconsQueryParams queryParams;
    public ListLexiconsRequest withQueryParams(ListLexiconsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLexiconsHeaders headers;
    public ListLexiconsRequest withHeaders(ListLexiconsHeaders headers) {
        this.headers = headers;
        return this;
    }
}