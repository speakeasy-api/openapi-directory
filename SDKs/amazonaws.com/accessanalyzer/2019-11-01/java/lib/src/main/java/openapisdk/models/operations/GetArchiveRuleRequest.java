package openapisdk.models.operations;



public class GetArchiveRuleRequest {
    public GetArchiveRulePathParams pathParams;
    public GetArchiveRuleRequest withPathParams(GetArchiveRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetArchiveRuleHeaders headers;
    public GetArchiveRuleRequest withHeaders(GetArchiveRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
}