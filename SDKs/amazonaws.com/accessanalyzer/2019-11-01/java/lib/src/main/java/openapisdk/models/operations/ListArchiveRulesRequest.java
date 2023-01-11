package openapisdk.models.operations;



public class ListArchiveRulesRequest {
    public ListArchiveRulesPathParams pathParams;
    public ListArchiveRulesRequest withPathParams(ListArchiveRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListArchiveRulesQueryParams queryParams;
    public ListArchiveRulesRequest withQueryParams(ListArchiveRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListArchiveRulesHeaders headers;
    public ListArchiveRulesRequest withHeaders(ListArchiveRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
}