package openapisdk.models.operations;



public class DeleteArchiveRuleRequest {
    public DeleteArchiveRulePathParams pathParams;
    public DeleteArchiveRuleRequest withPathParams(DeleteArchiveRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteArchiveRuleQueryParams queryParams;
    public DeleteArchiveRuleRequest withQueryParams(DeleteArchiveRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteArchiveRuleHeaders headers;
    public DeleteArchiveRuleRequest withHeaders(DeleteArchiveRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
}