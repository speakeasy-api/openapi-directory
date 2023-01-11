package openapisdk.models.operations;



public class ListFindingsReportsRequest {
    public ListFindingsReportsPathParams pathParams;
    public ListFindingsReportsRequest withPathParams(ListFindingsReportsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFindingsReportsQueryParams queryParams;
    public ListFindingsReportsRequest withQueryParams(ListFindingsReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFindingsReportsHeaders headers;
    public ListFindingsReportsRequest withHeaders(ListFindingsReportsHeaders headers) {
        this.headers = headers;
        return this;
    }
}